param(
  [string]$Origin = "http://127.0.0.1:3105",
  [string]$BasePath = "/container-depot-showcase"
)

$ErrorActionPreference = "Stop"
$project = Split-Path -Parent $PSScriptRoot
$output = Join-Path $project "github-pages"
$resolvedProject = [System.IO.Path]::GetFullPath($project)
$resolvedOutput = [System.IO.Path]::GetFullPath($output)

if (-not $resolvedOutput.StartsWith($resolvedProject, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Static output must remain inside the project."
}

if (Test-Path -LiteralPath $resolvedOutput) {
  Get-ChildItem -LiteralPath $resolvedOutput -Force | Remove-Item -Recurse -Force
} else {
  New-Item -ItemType Directory -Path $resolvedOutput | Out-Null
}

Copy-Item -Path (Join-Path $project "public\*") -Destination $resolvedOutput -Recurse -Force
Copy-Item -Path (Join-Path $project "dist\client\assets") -Destination $resolvedOutput -Recurse -Force

$routes = @(
  @{ Route = ""; File = "index.html" },
  @{ Route = "construction"; File = "construction\index.html"; Interactive = $true },
  @{ Route = "farm"; File = "farm\index.html" },
  @{ Route = "business"; File = "business\index.html" },
  @{ Route = "moving"; File = "moving\index.html" },
  @{ Route = "renovation"; File = "renovation\index.html" },
  @{ Route = "vehicles"; File = "vehicles\index.html" },
  @{ Route = "events"; File = "events\index.html" },
  @{ Route = "institutions"; File = "institutions\index.html" },
  @{ Route = "privacy"; File = "privacy\index.html" },
  @{ Route = "terms"; File = "terms\index.html" }
)

$constructionRoutes = @(
  "construction/resources",
  "construction/resources/construction-container-statistics",
  "construction/questions",
  "construction/calculators/container-size",
  "construction/calculators/ownership"
)

$guideSource = Get-Content -Raw -LiteralPath (Join-Path $project "app\construction\guide-data.ts")
$guideSlugs = [regex]::Matches($guideSource, 'slug:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
if ($guideSlugs.Count -ne 32) {
  throw "Expected 32 construction guide slugs, found $($guideSlugs.Count)."
}
$constructionRoutes += $guideSlugs | ForEach-Object { "construction/guides/$_" }

foreach ($route in $constructionRoutes) {
  $routes += @{ Route = $route; File = "$($route.Replace('/', '\'))\index.html"; Interactive = $true }
}

foreach ($entry in $routes) {
  $url = if ($entry.Route) { "$Origin/$($entry.Route)" } else { "$Origin/" }
  $html = (Invoke-WebRequest -UseBasicParsing $url).Content
  if (-not $entry.Interactive) {
    $html = [regex]::Replace($html, '(?is)<script\b[^>]*>.*?</script>', '')
    $html = [regex]::Replace($html, '(?is)<link\b[^>]*rel="modulepreload"[^>]*>', '')
  }
  $html = [regex]::Replace($html, '/_vinext/image\?url=([^&"]+)(?:&amp;|&)w=\d+(?:&amp;|&)q=\d+', {
    param($match)
    $asset = [System.Uri]::UnescapeDataString($match.Groups[1].Value)
    return "$BasePath$asset"
  })
  $html = [regex]::Replace($html, '(href|src)="/(?!container-depot-showcase/)', "`$1=`"$BasePath/")
  $html = $html.Replace('url(/', "url($BasePath/")
  $html = $html.Replace("$BasePath$BasePath/", "$BasePath/")
  $extraScripts = "<script src=`"$BasePath/quote-form.js`" defer></script>"
  if ($entry.Interactive) {
    $extraScripts += "<script src=`"$BasePath/static-navigation.js`" defer></script>"
  }
  $html = $html.Replace('</body>', "$extraScripts</body>")

  $target = Join-Path $resolvedOutput $entry.File
  $targetDir = Split-Path -Parent $target
  if (-not (Test-Path -LiteralPath $targetDir)) { New-Item -ItemType Directory -Path $targetDir | Out-Null }
  [System.IO.File]::WriteAllText($target, $html, [System.Text.UTF8Encoding]::new($false))
}

New-Item -ItemType File -Path (Join-Path $resolvedOutput ".nojekyll") -Force | Out-Null
Write-Output "Exported static site to $resolvedOutput"
