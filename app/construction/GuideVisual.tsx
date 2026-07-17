import type { GuidePresentation } from "./guide-presentation";

type VisualProps = {
  category: string;
  presentation: GuidePresentation;
};

const C = {
  navy: "#081421",
  slate: "#34495b",
  orange: "#f26a18",
  cream: "#f4f1ea",
  pale: "#dfe6eb",
  green: "#2c6a45",
  white: "#ffffff",
};

function ContainerShell({ x = 120, y = 116, width = 510, height = 194 }: { x?: number; y?: number; width?: number; height?: number }) {
  const ribs = Array.from({ length: 14 }, (_, index) => x + 34 + index * ((width - 92) / 13));
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx="3" fill={C.slate} stroke={C.navy} strokeWidth="8" />
      <rect x={x + width - 88} y={y + 9} width="78" height={height - 18} fill="#253746" stroke={C.pale} strokeWidth="3" />
      <line x1={x + width - 49} y1={y + 10} x2={x + width - 49} y2={y + height - 10} stroke={C.pale} strokeWidth="3" />
      <line x1={x + width - 76} y1={y + 31} x2={x + width - 19} y2={y + 31} stroke={C.pale} strokeWidth="3" />
      <line x1={x + width - 76} y1={y + height - 31} x2={x + width - 19} y2={y + height - 31} stroke={C.pale} strokeWidth="3" />
      {ribs.map((rib) => <line key={rib} x1={rib} y1={y + 9} x2={rib} y2={y + height - 9} stroke="#526777" strokeWidth="4" />)}
      <rect x={x - 9} y={y - 9} width="22" height="22" fill={C.orange} />
      <rect x={x + width - 13} y={y - 9} width="22" height="22" fill={C.orange} />
      <rect x={x - 9} y={y + height - 13} width="22" height="22" fill={C.orange} />
      <rect x={x + width - 13} y={y + height - 13} width="22" height="22" fill={C.orange} />
    </g>
  );
}

function SecurityVisual() {
  return <g>
    <rect x="55" y="48" width="690" height="330" rx="8" fill="#e8edf0" stroke={C.navy} strokeWidth="5" />
    <path d="M92 330V92h616v238z" fill="none" stroke="#9aabb6" strokeWidth="3" strokeDasharray="9 8" />
    <circle className="security-layer security-layer-one" cx="400" cy="214" r="154" fill="none" stroke={C.orange} strokeWidth="4" opacity=".22" />
    <circle className="security-layer security-layer-two" cx="400" cy="214" r="129" fill="none" stroke={C.orange} strokeWidth="4" opacity=".35" />
    <ContainerShell x={156} y={138} width={488} height={170} />
    <circle className="security-lock-pulse" cx="596" cy="223" r="45" fill={C.orange} />
    <rect x="574" y="216" width="44" height="37" rx="5" fill={C.navy} />
    <path d="M584 216v-12c0-22 25-22 25 0v12" fill="none" stroke={C.white} strokeWidth="7" />
    <g className="security-camera"><path d="M103 105h64l25 17-25 18h-64z" fill={C.slate} stroke={C.navy} strokeWidth="4" /><circle cx="121" cy="122" r="8" fill={C.orange} /><path d="M102 140l-18 32" stroke={C.navy} strokeWidth="7" /></g>
    <g className="security-light"><path d="M685 88v72" stroke={C.navy} strokeWidth="7" /><path d="M650 102h35" stroke={C.navy} strokeWidth="7" /><path d="M649 108l-26 47h52z" fill={C.orange} opacity=".8" /></g>
    <g className="security-labels" fontFamily="Arial" fontWeight="800" fontSize="16" fill={C.navy}>
      <text x="92" y="359">01 VISIBILITY</text><text x="331" y="359">02 CONTROLLED ACCESS</text><text x="601" y="359">03 CLOSEOUT</text>
    </g>
  </g>;
}

function PlanningVisual() {
  return <g>
    <rect x="44" y="42" width="712" height="346" rx="9" fill="#e8edf0" stroke={C.navy} strokeWidth="5" />
    <path d="M70 319H732" stroke="#aab8c1" strokeWidth="34" strokeLinecap="round" />
    <rect x="478" y="174" width="266" height="154" rx="5" fill="none" stroke={C.orange} strokeWidth="4" strokeDasharray="12 9" />
    <path className="planning-route-line" d="M81 88H719" fill="none" stroke={C.orange} strokeWidth="5" strokeDasharray="15 10" />
    <path d="M81 88l18-12M81 88l18 12M719 88l-18-12M719 88l-18 12" stroke={C.orange} strokeWidth="5" />
    <text x="400" y="71" textAnchor="middle" fill={C.navy} fontFamily="Arial" fontSize="16" fontWeight="800">VERIFY THE FULL APPROACH AND OVERHEAD ENVELOPE</text>

    <g className="delivery-truck-motion">
      <path d="M72 258h112l34 24h66v35H72z" fill={C.navy} stroke="#020912" strokeWidth="4" />
      <path d="M92 229h83l29 29H72z" fill={C.slate} stroke={C.navy} strokeWidth="4" />
      <rect x="106" y="238" width="50" height="25" fill="#b9d5e5" />
      <path d="M202 270l230-104 12 24-230 104z" fill={C.slate} stroke={C.navy} strokeWidth="5" />
      <g transform="translate(225 152) rotate(-24)">
        <rect x="0" y="0" width="220" height="90" rx="2" fill="#455f72" stroke={C.navy} strokeWidth="5" />
        {Array.from({ length: 10 }, (_, index) => <line key={index} x1={20 + index * 19} y1="7" x2={20 + index * 19} y2="83" stroke="#6f8493" strokeWidth="3" />)}
        <rect x="190" y="7" width="23" height="76" fill="#253746" stroke={C.pale} strokeWidth="2" />
      </g>
      <circle cx="123" cy="319" r="21" fill="#17232d" stroke={C.orange} strokeWidth="6" />
      <circle cx="248" cy="319" r="21" fill="#17232d" stroke={C.orange} strokeWidth="6" />
    </g>

    <g className="planning-final-container">
      <rect x="510" y="213" width="220" height="94" rx="3" fill={C.slate} stroke={C.navy} strokeWidth="6" />
      {Array.from({ length: 9 }, (_, index) => <line key={index} x1={529 + index * 19} y1="220" x2={529 + index * 19} y2="300" stroke="#627786" strokeWidth="3" />)}
      <rect x="690" y="220" width="33" height="80" fill="#253746" stroke={C.pale} strokeWidth="2" />
      <line x1="706" y1="221" x2="706" y2="299" stroke={C.pale} strokeWidth="2" />
      <path className="planning-door-swing" d="M730 307a70 70 0 0 0 62-69" fill="none" stroke={C.orange} strokeWidth="5" strokeDasharray="9 7" />
    </g>
    <g className="planning-pad">
      <rect x="504" y="307" width="44" height="15" fill={C.green} /><rect x="698" y="307" width="44" height="15" fill={C.green} />
      <path d="M497 343h250" stroke={C.green} strokeWidth="5" /><path d="M497 334v18M747 334v18" stroke={C.green} strokeWidth="5" />
      <rect x="497" y="353" width="250" height="24" rx="3" fill={C.green} />
      <text x="622" y="369" textAnchor="middle" fill={C.white} fontFamily="Arial" fontSize="10.5" fontWeight="800">VERIFY SUPPORT FOR UNIT, LOAD + SITE</text>
    </g>
    <g fontFamily="Arial" fontWeight="800"><rect x="75" y="174" width="125" height="29" rx="3" fill={C.orange} /><text x="137" y="194" textAnchor="middle" fill={C.white} fontSize="11.5">CARRIER CONTROLS</text><rect x="518" y="136" width="218" height="29" rx="3" fill={C.navy} /><text x="627" y="155" textAnchor="middle" fill={C.white} fontSize="10.5">KEEP PEOPLE OUTSIDE UNLOAD ZONE</text></g>
  </g>;
}

function SizeVisual() {
  return <g>
    <text x="70" y="54" fill={C.navy} fontSize="15" fontWeight="800">NOMINAL LENGTH COMPARISON</text>
    <ContainerShell x={70} y={78} width={160} height={68} />
    <path d="M70 169h160M70 161v16M230 161v16" stroke={C.orange} strokeWidth="5" />
    <text x="150" y="196" textAnchor="middle" fill={C.navy} fontSize="20" fontWeight="800">20FT</text>
    <ContainerShell x={70} y={226} width={320} height={68} />
    <path d="M70 317h320M70 309v16M390 309v16" stroke={C.orange} strokeWidth="5" />
    <text x="230" y="344" textAnchor="middle" fill={C.navy} fontSize="20" fontWeight="800">40FT - TWICE THE NOMINAL LENGTH</text>
    <text x="500" y="132" fill={C.navy} fontSize="15" fontWeight="800">NOMINAL EXTERIOR HEIGHT</text>
    <rect x="510" y="226" width="80" height="68" fill={C.slate} stroke={C.navy} strokeWidth="5" />
    <line x1="550" y1="230" x2="550" y2="290" stroke={C.pale} strokeWidth="3" />
    <rect x="640" y="218" width="80" height="76" fill={C.orange} stroke={C.navy} strokeWidth="5" />
    <line x1="680" y1="222" x2="680" y2="290" stroke="#ffe0ca" strokeWidth="3" />
    <text x="550" y="322" textAnchor="middle" fill={C.navy} fontSize="17" fontWeight="800">8FT 6IN</text>
    <text x="680" y="322" textAnchor="middle" fill={C.navy} fontSize="17" fontWeight="800">9FT 6IN</text>
    <text x="615" y="350" textAnchor="middle" fill={C.navy} fontSize="15" fontWeight="800">STANDARD / HIGH CUBE</text>
  </g>;
}

function OperationsVisual() {
  return <g><ContainerShell x={82} y={92} width={636} height={250} /><rect x="108" y="118" width="460" height="198" fill={C.cream} /><path d="M145 120v196M285 120v196M425 120v196" stroke={C.orange} strokeWidth="5" /><path d="M108 180h460M108 244h460" stroke={C.navy} strokeWidth="5" /><g fill={C.green}>{[128,172,305,347,446,490].map((x,i)=><rect key={x} x={x} y={i%2?200:137} width="34" height="28" />)}</g><path d="M590 118v198" stroke={C.white} strokeWidth="4" strokeDasharray="10 8" /><path d="M610 213h74" stroke={C.orange} strokeWidth="8" /><path d="M670 198l20 15-20 15" fill="none" stroke={C.orange} strokeWidth="8" /></g>;
}

function CostVisual() {
  return <g>
    <text x="400" y="71" textAnchor="middle" fill={C.navy} fontSize="17" fontWeight="800">TOTAL OWNERSHIP COST IS AN EQUATION, NOT A PRICE FORECAST</text>
    <rect x="48" y="125" width="185" height="150" rx="7" fill={C.pale} stroke={C.navy} strokeWidth="5" />
    <rect x="307" y="125" width="185" height="150" rx="7" fill={C.slate} stroke={C.navy} strokeWidth="5" />
    <rect x="566" y="125" width="185" height="150" rx="7" fill={C.orange} stroke={C.navy} strokeWidth="5" />
    <text x="140" y="188" textAnchor="middle" fill={C.navy} fontSize="22" fontWeight="900">ACQUIRE</text><text x="140" textAnchor="middle" fill={C.navy} fontSize="12" fontWeight="800"><tspan x="140" y="218">PURCHASE</tspan><tspan x="140" dy="17">+ DELIVERY</tspan></text>
    <text x="399" y="188" textAnchor="middle" fill={C.white} fontSize="22" fontWeight="900">OPERATE</text><text x="399" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="800"><tspan x="399" y="218">MOVES + CARE</tspan><tspan x="399" dy="17">+ STORAGE</tspan></text>
    <text x="658" y="188" textAnchor="middle" fill={C.white} fontSize="22" fontWeight="900">RESALE</text><text x="658" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="800"><tspan x="658" y="218">CONSERVATIVE</tspan><tspan x="658" dy="17">CREDIT</tspan></text>
    <text x="270" y="211" textAnchor="middle" fill={C.navy} fontSize="42" fontWeight="900">+</text><text x="529" y="211" textAnchor="middle" fill={C.navy} fontSize="42" fontWeight="900">-</text>
    <rect x="224" y="315" width="352" height="50" rx="5" fill={C.green} />
    <text x="400" y="347" textAnchor="middle" fill={C.white} fontSize="18" fontWeight="900">= SCENARIO OWNERSHIP COST</text>
  </g>;
}

function ApprovalVisual() {
  return <g>{[[100,"SITE"],[320,"LOCAL"],[540,"PROJECT"]].map(([x,label],index)=><g key={String(label)}><circle cx={Number(x)+80} cy="208" r="72" fill={index===1?C.orange:C.slate} /><path d={`M${Number(x)+48} 208l22 22 44-52`} fill="none" stroke={C.white} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" /><text x={Number(x)+80} y="315" textAnchor="middle" fill={C.navy} fontSize="20" fontWeight="800">{label}</text>{index<2&&<path d={`M${Number(x)+155} 208h85`} stroke={C.orange} strokeWidth="8" />}</g>)}</g>;
}

function FieldScenarioVisual() {
  return <g><rect x="84" y="74" width="632" height="290" fill="#e8edf0" stroke={C.navy} strokeWidth="6" /><rect x="111" y="102" width="267" height="95" fill={C.slate} /><rect x="426" y="102" width="261" height="95" fill={C.orange} opacity=".88" /><rect x="111" y="235" width="175" height="98" fill={C.green} /><rect x="325" y="235" width="362" height="98" fill={C.pale} stroke={C.slate} strokeWidth="4" /><path d="M378 150h48M198 197v38M506 197v38M286 284h39" stroke={C.navy} strokeWidth="7" /><text x="244" y="159" textAnchor="middle" fill={C.white} fontSize="18" fontWeight="800">DAILY WORK</text><text x="556" y="159" textAnchor="middle" fill={C.white} fontSize="18" fontWeight="800">CONTROLLED STOCK</text><text x="198" y="292" textAnchor="middle" fill={C.white} fontSize="18" fontWeight="800">OWNER</text><text x="506" y="292" textAnchor="middle" fill={C.navy} fontSize="18" fontWeight="800">CLOSEOUT ROUTINE</text></g>;
}

function QuestionVisual() {
  return <g><rect x="92" y="74" width="616" height="286" rx="8" fill={C.pale} /><g fill={C.white} stroke={C.navy} strokeWidth="4">{[[124,110],[318,110],[512,110],[124,222],[318,222],[512,222]].map(([x,y])=><rect key={`${x}-${y}`} x={x} y={y} width="164" height="90" rx="5" />)}</g>{[[206,156],[400,156],[594,156],[206,268],[400,268],[594,268]].map(([x,y],i)=><text key={`${x}-${y}`} x={x} y={y+12} textAnchor="middle" fill={i===0?C.orange:C.navy} fontSize="45" fontWeight="900">?</text>)}</g>;
}

function graphicFor(category: string) {
  if (category === "security") return <SecurityVisual />;
  if (category === "planning") return <PlanningVisual />;
  if (category === "specifications" || category === "buying") return <SizeVisual />;
  if (category === "operations") return <OperationsVisual />;
  if (category === "costs") return <CostVisual />;
  if (category === "regulations") return <ApprovalVisual />;
  if (category === "faq") return <QuestionVisual />;
  return <FieldScenarioVisual />;
}

export function GuideVisual({ category, presentation }: VisualProps) {
  const diagramNote = category === "specifications" || category === "buying"
    ? "RELATIVE DIMENSIONS ONLY - VERIFY THE EXACT UNIT"
    : "SCHEMATIC ONLY - VERIFY THE ACTUAL UNIT AND SITE";
  return (
    <figure className={`guide-visual guide-visual-${category}`}>
      <div className="guide-visual-copy">
        <span>{presentation.label}</span>
        <h2>{presentation.visualTitle}</h2>
        <p>{presentation.visualNote}</p>
      </div>
      <svg viewBox="0 0 800 430" role="img" aria-label={presentation.visualTitle}>
        <title>{presentation.visualTitle}</title>
        <desc>{presentation.visualNote}</desc>
        <rect width="800" height="430" fill={C.cream} />
        {graphicFor(category)}
        <rect x="0" y="397" width="800" height="33" fill={C.navy} />
        <text x="400" y="419" textAnchor="middle" fill={C.white} fontFamily="Arial" fontSize="13" fontWeight="800">{diagramNote}</text>
      </svg>
    </figure>
  );
}
