import type { KnowledgeConfig, KnowledgeGuide } from "./data";

const C = { navy: "#081421", slate: "#34495b", orange: "#ef6b2e", cream: "#f4f1ea", pale: "#e3e9ed", green: "#2d6b49", white: "#ffffff" };

function Container({ x, y, width, height, color = C.slate }: { x: number; y: number; width: number; height: number; color?: string }) {
  const ribs = Array.from({ length: Math.max(5, Math.round(width / 30)) }, (_, i) => x + 18 + i * ((width - 42) / Math.max(4, Math.round(width / 30) - 1)));
  return <g><rect x={x} y={y} width={width} height={height} rx="3" fill={color} stroke={C.navy} strokeWidth="6"/>{ribs.map((r) => <line key={r} x1={r} y1={y + 6} x2={r} y2={y + height - 6} stroke="#718491" strokeWidth="3"/>)}<rect x={x + width - 38} y={y + 6} width="31" height={height - 12} fill="#273948" stroke={C.pale} strokeWidth="2"/><line x1={x + width - 22} y1={y + 8} x2={x + width - 22} y2={y + height - 8} stroke={C.pale} strokeWidth="2"/></g>;
}

function SizeVisual() {
  return <g><text x="55" y="48" fill={C.navy} fontSize="15" fontWeight="900">RELATIVE NOMINAL LENGTH</text><Container x={58} y={74} width={170} height={78}/><Container x={58} y={214} width={340} height={78} color="#b94e22"/><path d="M58 178h170M58 169v18M228 169v18M58 318h340M58 309v18M398 309v18" stroke={C.orange} strokeWidth="5"/><text x="143" y="205" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="20">20FT</text><text x="228" y="345" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="20">40FT = 2X NOMINAL LENGTH</text><text x="520" y="48" fill={C.navy} fontSize="15" fontWeight="900">RELATIVE EXTERIOR HEIGHT</text><rect x="520" y="190" width="85" height="102" fill={C.slate} stroke={C.navy} strokeWidth="6"/><rect x="655" y="178" width="85" height="114" fill={C.orange} stroke={C.navy} strokeWidth="6"/><text x="562" y="322" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="18">8FT 6IN</text><text x="697" y="322" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="18">9FT 6IN</text><text x="630" y="352" textAnchor="middle" fill={C.navy} fontWeight="800" fontSize="14">STANDARD / HIGH CUBE</text></g>;
}

function PlacementVisual() {
  return <g><rect x="40" y="42" width="720" height="340" rx="8" fill={C.pale} stroke={C.navy} strokeWidth="5"/><path d="M72 322h656" stroke="#9ba9b2" strokeWidth="44" strokeLinecap="round"/><path className="knowledge-route-motion" d="M85 85h610" stroke={C.orange} strokeWidth="5" strokeDasharray="15 10"/><text x="390" y="70" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="14">VERIFY ROUTE, UNLOAD ZONE AND FINAL WORKING SPACE</text><g transform="translate(80 220)"><path d="M0 60h150l42 30h58v40H0z" fill={C.navy}/><rect x="18" y="25" width="112" height="45" fill={C.slate}/><circle cx="48" cy="132" r="18" fill={C.navy} stroke={C.orange} strokeWidth="6"/><circle cx="190" cy="132" r="18" fill={C.navy} stroke={C.orange} strokeWidth="6"/></g><Container x={485} y={208} width={230} height={100}/><rect x="475" y="308" width="250" height="18" fill={C.green}/><path d="M468 348h264M468 338v20M732 338v20" stroke={C.green} strokeWidth="5"/><path d="M715 307a78 78 0 0 0 68-74" fill="none" stroke={C.orange} strokeWidth="5" strokeDasharray="9 7"/></g>;
}

function ZoneVisual() {
  return <g><Container x={55} y={78} width={690} height={270}/><rect x="83" y="105" width="535" height="216" fill={C.cream}/><path d="M83 174h535M83 245h535M220 105v216M375 105v216M510 105v216" stroke={C.navy} strokeWidth="4"/><g fill={C.green}>{[[103,122],[242,122],[397,192],[530,262],[105,262],[242,192]].map(([x,y]) => <rect key={`${x}-${y}`} x={x} y={y} width="82" height="34"/>)}</g><path className="knowledge-flow-motion" d="M642 135v150" stroke={C.orange} strokeWidth="10" strokeDasharray="16 11"/><path d="M625 270l17 25 17-25" fill="none" stroke={C.orange} strokeWidth="8"/><text x="150" y="377" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="14">FREQUENT</text><text x="375" y="377" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="14">CONTROLLED</text><text x="638" y="377" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="14">CLEAR ACCESS</text></g>;
}

function ClimateVisual() {
  return <g><rect x="48" y="47" width="704" height="334" fill={C.pale} stroke={C.navy} strokeWidth="5"/><Container x={115} y={125} width={560} height={200}/><path className="knowledge-air-motion" d="M105 104c120-58 480-58 595 0" fill="none" stroke={C.orange} strokeWidth="8" strokeDasharray="18 11"/><path className="knowledge-air-motion reverse" d="M690 346c-130 45-455 45-580 0" fill="none" stroke={C.green} strokeWidth="8" strokeDasharray="18 11"/><g fill={C.orange}>{[180,300,420,540].map((x) => <path key={x} d={`M${x} 170c-18 22-20 42 0 58 20-16 18-36 0-58z`} opacity=".78"/>)}</g><rect x="200" y="245" width="390" height="54" fill={C.cream} stroke={C.navy} strokeWidth="4"/><text x="395" y="277" textAnchor="middle" fill={C.navy} fontSize="16" fontWeight="900">MEASURE FIRST. THEN SELECT THE CONTROL.</text></g>;
}

function SecurityVisual() {
  return <g><rect x="55" y="48" width="690" height="330" rx="8" fill={C.pale} stroke={C.navy} strokeWidth="5"/><circle className="knowledge-security-pulse" cx="400" cy="213" r="158" fill="none" stroke={C.orange} strokeWidth="5" opacity=".26"/><circle className="knowledge-security-pulse delay" cx="400" cy="213" r="130" fill="none" stroke={C.orange} strokeWidth="5" opacity=".42"/><Container x={150} y={138} width={500} height={166}/><circle cx="603" cy="222" r="48" fill={C.orange}/><rect x="580" y="217" width="46" height="39" rx="5" fill={C.navy}/><path d="M590 217v-14c0-23 26-23 26 0v14" fill="none" stroke={C.white} strokeWidth="7"/><text x="145" y="357" fill={C.navy} fontSize="14" fontWeight="900">PLACEMENT</text><text x="335" y="357" fill={C.navy} fontSize="14" fontWeight="900">ACCESS</text><text x="515" y="357" fill={C.navy} fontSize="14" fontWeight="900">CLOSEOUT</text></g>;
}

function GateVisual() {
  return <g>{[[68,"CONTENTS"],[276,"SITE"],[484,"RULES"]].map(([x,label], index) => <g key={String(label)}><rect x={Number(x)} y="125" width="166" height="164" rx="8" fill={index === 1 ? C.orange : C.slate}/><path d={`M${Number(x)+43} 209l28 26 54-65`} fill="none" stroke={C.white} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/><text x={Number(x)+83} y="326" textAnchor="middle" fill={C.navy} fontSize="17" fontWeight="900">{label}</text>{index < 2 && <path className="knowledge-flow-motion" d={`M${Number(x)+166} 207h42`} stroke={C.orange} strokeWidth="8"/>}</g>)}<rect x="684" y="143" width="64" height="128" fill={C.green}/><text x="716" y="190" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="900"><tspan x="716">ACT</tspan><tspan x="716" dy="20">ON THE</tspan><tspan x="716" dy="20">EXACT</tspan><tspan x="716" dy="20">PLAN</tspan></text></g>;
}

function WorkflowVisual() {
  return <g>{[[55,"DEFINE"],[245,"VERIFY"],[435,"OPERATE"],[625,"REVIEW"]].map(([x,label], index) => <g key={String(label)}><circle cx={Number(x)+60} cy="205" r="58" fill={index % 2 ? C.orange : C.slate}/><text x={Number(x)+60} y="213" textAnchor="middle" fill={C.white} fontWeight="900" fontSize="14">{label}</text>{index < 3 && <><path className="knowledge-flow-motion" d={`M${Number(x)+119} 205h70`} stroke={C.green} strokeWidth="8"/><path d={`M${Number(x)+175} 192l16 13-16 13`} fill="none" stroke={C.green} strokeWidth="8"/></>}</g>)}<text x="400" y="328" textAnchor="middle" fill={C.navy} fontWeight="900" fontSize="17">ASSIGN AN OWNER AND RECORD THE EXCEPTION</text></g>;
}

function visualFor(category: string) {
  if (["buying", "fit-access"].includes(category)) return <SizeVisual/>;
  if (category === "placement") return <PlacementVisual/>;
  if (["equipment", "inventory", "recreation"].includes(category)) return <ZoneVisual/>;
  if (["inputs", "climate", "preservation"].includes(category)) return <ClimateVisual/>;
  if (category === "security") return <SecurityVisual/>;
  if (["safety", "compliance", "modifications"].includes(category)) return <GateVisual/>;
  return <WorkflowVisual/>;
}

export function KnowledgeVisual({ config, guide }: { config: KnowledgeConfig; guide: KnowledgeGuide }) {
  return <figure className={`guide-visual guide-visual-${guide.category}`}><div className="guide-visual-copy"><span>{config.shortName} decision diagram</span><h2>{guide.navTitle}</h2><p>{guide.quickAnswer}</p></div><svg viewBox="0 0 800 430" role="img" aria-label={`${guide.navTitle} planning diagram`}><title>{`${guide.navTitle} planning diagram`}</title><desc>Professional screening diagram. Verify the exact container, contents and site before acting.</desc><rect width="800" height="430" fill={C.cream}/>{visualFor(guide.category)}<rect y="397" width="800" height="33" fill={C.navy}/><text x="400" y="419" textAnchor="middle" fill={C.white} fontFamily="Arial" fontSize="13" fontWeight="900">SCREENING DIAGRAM ONLY - VERIFY THE EXACT UNIT, CONTENTS AND SITE</text></svg></figure>;
}
