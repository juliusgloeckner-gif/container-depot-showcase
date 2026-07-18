param(
  [string]$AssetOrigin = "https://ucd-knowledge-hubs-review.vercel.app"
)

$ErrorActionPreference = "Stop"
$project = Split-Path -Parent $PSScriptRoot
$source = [System.IO.Path]::GetFullPath((Join-Path $project "github-pages"))
$output = [System.IO.Path]::GetFullPath((Join-Path $project "vercel-production"))
$resolvedProject = [System.IO.Path]::GetFullPath($project)

if (-not $source.StartsWith($resolvedProject, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Static source must remain inside the project."
}
if (-not $output.StartsWith($resolvedProject, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Production output must remain inside the project."
}
if ($output -eq $source) { throw "Production output must not overwrite the static source." }

if (Test-Path -LiteralPath $output) {
  Get-ChildItem -LiteralPath $output -Force | Remove-Item -Recurse -Force
} else {
  New-Item -ItemType Directory -Path $output | Out-Null
}

Copy-Item -Path (Join-Path $source "*") -Destination $output -Recurse -Force

foreach ($privateName in @(".vercel", ".env.local")) {
  $privatePath = Join-Path $output $privateName
  if (Test-Path -LiteralPath $privatePath) { Remove-Item -LiteralPath $privatePath -Recurse -Force }
}

$rewrites = @()
$redirectDirectories = @("authentic", "gallery-v3", "gallery-v4", "inventory-v2", "inventory-v3", "inventory-v4")
foreach ($directory in $redirectDirectories) {
  $directoryPath = Join-Path $output $directory
  if (Test-Path -LiteralPath $directoryPath) { Remove-Item -LiteralPath $directoryPath -Recurse -Force }
  $rewrites += @{ source = "/$directory/:path*"; destination = "$AssetOrigin/$directory/:path*" }
}

$rootImages = Get-ChildItem -LiteralPath $output -File | Where-Object {
  $_.Extension -in @(".jpg", ".jpeg", ".png", ".webp") -and $_.Name -ne "og.png"
}
foreach ($image in $rootImages) {
  Remove-Item -LiteralPath $image.FullName -Force
  $rewrites += @{ source = "/$($image.Name)"; destination = "$AssetOrigin/$($image.Name)" }
}

$vercelConfig = @{
  cleanUrls = $true
  trailingSlash = $true
  rewrites = $rewrites
} | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText((Join-Path $output "vercel.json"), $vercelConfig, [System.Text.UTF8Encoding]::new($false))

$files = Get-ChildItem -LiteralPath $output -Recurse -File
$megabytes = [math]::Round((($files | Measure-Object Length -Sum).Sum / 1MB), 2)
Write-Output "Prepared $($files.Count) production files ($megabytes MB) in $output"
