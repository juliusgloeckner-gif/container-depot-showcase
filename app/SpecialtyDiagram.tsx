type SpecialtyType = "reefer" | "rollup" | "tunnel" | "export" | "insulated" | "office" | "hazmat";

type SpecialtyDiagramProps = {
  type: SpecialtyType;
  notes: { title: string; text: string }[];
};

function ReeferDiagram() {
  return (
    <svg viewBox="0 0 900 390" role="img" aria-labelledby="reefer-title reefer-desc">
      <title id="reefer-title">Refrigerated container airflow and power planning diagram</title>
      <desc id="reefer-desc">A cutaway reefer container showing the refrigeration machinery at one short end, supply air moving below the cargo through the T-floor, return air moving above it, and a clear load line.</desc>
      <rect className="diagram-shell" x="70" y="72" width="700" height="245" rx="3" />
      <rect className="diagram-machine" x="70" y="72" width="128" height="245" />
      <text className="diagram-label light" x="134" y="184" textAnchor="middle">REEFER</text>
      <text className="diagram-small light" x="134" y="207" textAnchor="middle">MACHINERY</text>
      <path className="diagram-floor" d="M205 286 H748" />
      <path className="diagram-supply" d="M212 272 C350 330 605 330 738 272" />
      <path className="diagram-return" d="M738 110 C590 62 350 62 212 110" />
      <polygon className="diagram-arrow supply" points="722,264 748,270 728,288" />
      <polygon className="diagram-arrow return" points="230,102 204,110 226,124" />
      <rect className="diagram-cargo" x="245" y="145" width="88" height="128" />
      <rect className="diagram-cargo" x="348" y="130" width="88" height="143" />
      <rect className="diagram-cargo" x="451" y="154" width="88" height="119" />
      <rect className="diagram-cargo" x="554" y="139" width="88" height="134" />
      <rect className="diagram-cargo" x="657" y="161" width="62" height="112" />
      <line className="diagram-load-line" x1="215" y1="120" x2="738" y2="120" />
      <text className="diagram-small orange" x="485" y="111" textAnchor="middle">DO NOT LOAD ABOVE MARKED LOAD LINE</text>
      <text className="diagram-small green" x="482" y="358" textAnchor="middle">SUPPLY AIR THROUGH T-FLOOR</text>
      <text className="diagram-small blue" x="482" y="42" textAnchor="middle">UNOBSTRUCTED RETURN AIR</text>
      <path className="diagram-power" d="M62 172 H90" />
      <rect className="diagram-pedestal" x="38" y="140" width="28" height="64" />
      <text className="diagram-small" x="52" y="226" textAnchor="middle">POWER</text>
    </svg>
  );
}

function RollupDiagram() {
  return (
    <svg viewBox="0 0 900 390" role="img" aria-labelledby="rollup-title rollup-desc">
      <title id="rollup-title">Twenty and forty foot multi-door open-side container diagram</title>
      <desc id="rollup-desc">A 20-foot container with two roll-up doors and a 40-foot container with four roll-up doors along the long side, with reinforced vertical posts between openings.</desc>
      <text className="diagram-label" x="180" y="55" textAnchor="middle">20FT: 2 ACCESS BAYS</text>
      <rect className="diagram-shell rollup-shell" x="50" y="85" width="260" height="205" />
      {[72, 183].map((x) => <rect className="diagram-rollup" x={x} y="112" width="103" height="153" key={x} />)}
      {[63, 174, 286].map((x) => <rect className="diagram-post" x={x} y="92" width="12" height="190" key={x} />)}
      <line className="diagram-dimension" x1="50" y1="326" x2="310" y2="326" />
      <text className="diagram-small orange" x="180" y="353" textAnchor="middle">TWO LONG-SIDE ROLL-UP DOORS</text>

      <text className="diagram-label" x="600" y="55" textAnchor="middle">40FT: 4 ACCESS BAYS</text>
      <rect className="diagram-shell rollup-shell" x="340" y="85" width="520" height="205" />
      {[362, 480, 598, 716].map((x) => <rect className="diagram-rollup" x={x} y="112" width="110" height="153" key={x} />)}
      {[353, 471, 589, 707, 834].map((x) => <rect className="diagram-post" x={x} y="92" width="12" height="190" key={x} />)}
      <line className="diagram-dimension" x1="340" y1="326" x2="860" y2="326" />
      <text className="diagram-small orange" x="600" y="353" textAnchor="middle">FOUR LONG-SIDE ROLL-UP DOORS</text>
    </svg>
  );
}

function TunnelDiagram() {
  return (
    <svg viewBox="0 0 900 390" role="img" aria-labelledby="tunnel-title tunnel-desc">
      <title id="tunnel-title">Double-door tunnel container access diagram</title>
      <desc id="tunnel-desc">A plan view of a long container with paired cargo doors at both short ends, solid long sides, a clear center aisle and arrows showing loading from either end.</desc>
      <text className="diagram-label" x="450" y="45" textAnchor="middle">PAIRED CARGO DOORS AT BOTH SHORT ENDS</text>
      <rect className="diagram-shell tunnel-shell" x="190" y="92" width="520" height="208" />
      <line className="diagram-wall" x1="190" y1="92" x2="710" y2="92" />
      <line className="diagram-wall" x1="190" y1="300" x2="710" y2="300" />
      <path className="diagram-door" d="M190 92 L125 40 M190 196 L125 145 M190 196 L125 247 M190 300 L125 352" />
      <path className="diagram-door" d="M710 92 L775 40 M710 196 L775 145 M710 196 L775 247 M710 300 L775 352" />
      <rect className="diagram-cargo" x="225" y="112" width="110" height="56" />
      <rect className="diagram-cargo" x="225" y="224" width="110" height="56" />
      <rect className="diagram-cargo" x="565" y="112" width="110" height="56" />
      <rect className="diagram-cargo" x="565" y="224" width="110" height="56" />
      <path className="diagram-flow" d="M80 196 H390" />
      <polygon className="diagram-arrow supply" points="378,184 405,196 378,208" />
      <path className="diagram-flow" d="M820 196 H510" />
      <polygon className="diagram-arrow supply" points="522,184 495,196 522,208" />
      <text className="diagram-small green" x="450" y="189" textAnchor="middle">CLEAR THROUGH-AISLE</text>
      <text className="diagram-small orange" x="450" y="340" textAnchor="middle">LONG CORRUGATED SIDES REMAIN SOLID</text>
    </svg>
  );
}

function InsulatedDiagram() {
  return (
    <svg viewBox="0 0 900 390" role="img" aria-labelledby="insulated-title insulated-desc">
      <title id="insulated-title">Insulated container wall and dry-storage planning diagram</title>
      <desc id="insulated-desc">A cutaway wall shows the outer steel shell, insulation, vapor-control layer and durable interior liner, with monitoring and ventilation inside the dry-storage area.</desc>
      <text className="diagram-label" x="450" y="44" textAnchor="middle">A COMPLETE ENVELOPE, NOT ACTIVE REFRIGERATION</text>
      <rect className="diagram-shell" x="80" y="82" width="740" height="230" rx="3" />
      <rect className="diagram-machine" x="100" y="102" width="42" height="190" />
      <rect className="diagram-cargo" x="142" y="102" width="55" height="190" />
      <rect className="diagram-rollup" x="197" y="102" width="36" height="190" />
      <rect className="diagram-shell" x="233" y="102" width="565" height="190" />
      <text className="diagram-small light" x="121" y="205" textAnchor="middle" transform="rotate(-90 121 205)">OUTER STEEL</text>
      <text className="diagram-small" x="169" y="205" textAnchor="middle" transform="rotate(-90 169 205)">INSULATION</text>
      <text className="diagram-small" x="215" y="205" textAnchor="middle" transform="rotate(-90 215 205)">VAPOR LAYER</text>
      <text className="diagram-small light" x="260" y="205" textAnchor="middle" transform="rotate(-90 260 205)">LINER</text>
      <rect className="diagram-cargo" x="330" y="180" width="120" height="83" />
      <rect className="diagram-cargo" x="474" y="150" width="120" height="113" />
      <rect className="diagram-cargo" x="618" y="192" width="105" height="71" />
      <circle className="diagram-pedestal" cx="742" cy="134" r="20" />
      <text className="diagram-small light" x="742" y="139" textAnchor="middle">RH</text>
      <path className="diagram-return" d="M30 130 H86" />
      <path className="diagram-return" d="M30 210 H86" />
      <path className="diagram-return" d="M30 290 H86" />
      <text className="diagram-small blue" x="74" y="350">REDUCED HEAT FLOW</text>
      <text className="diagram-small green" x="540" y="350">VENTILATE + MONITOR TO THE USE</text>
    </svg>
  );
}

function OfficeDiagram() {
  return (
    <svg viewBox="0 0 900 390" role="img" aria-labelledby="office-title office-desc">
      <title id="office-title">Office container occupied-space planning diagram</title>
      <desc id="office-desc">A floor plan shows a framed personnel door, two windows, desks, HVAC, electrical service and a clear unobstructed exit route.</desc>
      <text className="diagram-label" x="450" y="44" textAnchor="middle">PLAN THE PEOPLE, UTILITIES AND EXIT ROUTE TOGETHER</text>
      <rect className="diagram-shell tunnel-shell" x="90" y="80" width="720" height="230" />
      <rect className="diagram-cargo" x="150" y="112" width="180" height="64" />
      <rect className="diagram-cargo" x="150" y="214" width="180" height="64" />
      <rect className="diagram-cargo" x="560" y="112" width="180" height="64" />
      <rect className="diagram-cargo" x="560" y="214" width="180" height="64" />
      <rect className="diagram-rollup" x="372" y="80" width="90" height="18" />
      <rect className="diagram-rollup" x="500" y="80" width="90" height="18" />
      <path className="diagram-door" d="M90 224 H150 M90 224 L150 282" />
      <path className="diagram-flow" d="M430 196 H155" />
      <polygon className="diagram-arrow supply" points="170,184 143,196 170,208" />
      <rect className="diagram-machine" x="758" y="145" width="52" height="100" />
      <text className="diagram-small light" x="784" y="200" textAnchor="middle" transform="rotate(-90 784 200)">HVAC</text>
      <text className="diagram-small orange" x="135" y="350">PERSONNEL DOOR + LANDING</text>
      <text className="diagram-small blue" x="417" y="350">FRAMED WINDOWS</text>
      <text className="diagram-small green" x="655" y="350">CLEAR EXIT ROUTE</text>
    </svg>
  );
}

function HazmatDiagram() {
  return (
    <svg viewBox="0 0 900 390" role="img" aria-labelledby="hazmat-title hazmat-desc">
      <title id="hazmat-title">Hazardous-material storage review diagram</title>
      <desc id="hazmat-desc">A purpose-built enclosure diagram shows separated compatible packages, secondary containment, low and high ventilation, controlled electrical fixtures and authority review.</desc>
      <text className="diagram-label" x="450" y="44" textAnchor="middle">THE MATERIAL AND QUANTITY DEFINE THE CONTROLS</text>
      <rect className="diagram-shell" x="75" y="78" width="750" height="235" rx="3" />
      <path className="diagram-floor" d="M105 282 H795 V300 H105 Z" />
      <rect className="diagram-cargo" x="135" y="175" width="94" height="105" />
      <rect className="diagram-cargo" x="250" y="158" width="94" height="122" />
      <line className="diagram-load-line" x1="382" y1="112" x2="382" y2="280" />
      <rect className="diagram-cargo" x="420" y="188" width="94" height="92" />
      <rect className="diagram-cargo" x="535" y="170" width="94" height="110" />
      <rect className="diagram-cargo" x="650" y="195" width="94" height="85" />
      <rect className="diagram-rollup" x="86" y="232" width="32" height="40" />
      <rect className="diagram-rollup" x="782" y="105" width="32" height="40" />
      <path className="diagram-supply" d="M102 250 C250 330 630 330 798 124" />
      <polygon className="diagram-arrow supply" points="784,128 808,116 802,144" />
      <circle className="diagram-pedestal" cx="706" cy="122" r="20" />
      <text className="diagram-small light" x="706" y="127" textAnchor="middle">EX</text>
      <text className="diagram-small orange" x="105" y="350">SECONDARY CONTAINMENT</text>
      <text className="diagram-small blue" x="386" y="350">COMPATIBILITY SEPARATION</text>
      <text className="diagram-small green" x="690" y="350">AHJ REVIEW</text>
    </svg>
  );
}

function ExportDiagram() {
  const steps = [
    { x: 35, number: "01", title: "BUY", detail: "UCD CONTAINER" },
    { x: 250, number: "02", title: "INSPECT", detail: "CSC STATUS" },
    { x: 465, number: "03", title: "PACK", detail: "YOUR SCHEDULE" },
    { x: 680, number: "04", title: "SHIP", detail: "YOUR FORWARDER" },
  ];
  return (
    <svg viewBox="0 0 900 390" role="img" aria-labelledby="export-title export-desc">
      <title id="export-title">International container purchase and freight-forwarder handoff</title>
      <desc id="export-desc">Four steps show the buyer purchasing a container from United Container Depot, the depot arranging CSC export-readiness inspection, the owner packing on their schedule, and a licensed freight forwarder arranging international shipment.</desc>
      <text className="diagram-label" x="450" y="42" textAnchor="middle">ONE CONTAINER. TWO CLEAR RESPONSIBILITIES.</text>
      <rect className="diagram-shell" x="24" y="68" width="415" height="248" rx="4" />
      <rect className="diagram-machine" x="461" y="68" width="415" height="248" rx="4" />
      <text className="diagram-small light" x="231" y="94" textAnchor="middle">UCD: CONTAINER + DEPOT INSPECTION</text>
      <text className="diagram-small light" x="668" y="94" textAnchor="middle">FORWARDER: BOOKING + MOVEMENT</text>
      {steps.map((step, index) => <g key={step.number}>
        <rect className="diagram-cargo" x={step.x} y="128" width="185" height="135" rx="2" />
        <text className="diagram-small orange" x={step.x + 20} y="157">{step.number}</text>
        <text className="diagram-label" x={step.x + 92.5} y="199" textAnchor="middle">{step.title}</text>
        <text className="diagram-small" x={step.x + 92.5} y="229" textAnchor="middle">{step.detail}</text>
        {index < steps.length - 1 && <>
          <path className="diagram-flow" d={`M${step.x + 185} 196 H${step.x + 213}`} />
          <polygon className="diagram-arrow supply" points={`${step.x + 202},184 ${step.x + 218},196 ${step.x + 202},208`} />
        </>}
      </g>)}
      <line className="diagram-dimension" x1="35" y1="292" x2="425" y2="292" />
      <line className="diagram-dimension" x1="475" y1="292" x2="865" y2="292" />
      <text className="diagram-small orange" x="231" y="343" textAnchor="middle">WE DO NOT BOOK OCEAN FREIGHT</text>
      <text className="diagram-small green" x="668" y="343" textAnchor="middle">FORWARDER CONFIRMS CARRIER + CUSTOMS</text>
    </svg>
  );
}

export function SpecialtyDiagram({ type, notes }: SpecialtyDiagramProps) {
  const content = {
    reefer: {
      eyebrow: "Cold-chain setup",
      title: "Airflow and power are part of the purchase.",
      visual: <ReeferDiagram />,
      caption: "Planning diagram. The exact unit, airflow limits, loading plan and electrical requirements are confirmed before delivery.",
    },
    rollup: {
      eyebrow: "Access layout",
      title: "The door count matches the container length.",
      visual: <RollupDiagram />,
      caption: "Planning diagram. Final door widths, reinforcement, locks and partitions are confirmed on the approved fabrication drawing.",
    },
    tunnel: {
      eyebrow: "Two-way access",
      title: "Cargo doors belong at both short ends.",
      visual: <TunnelDiagram />,
      caption: "Planning diagram. Door condition, two-end clearance, locks and internal layout are confirmed before delivery.",
    },
    insulated: {
      eyebrow: "Envelope planning",
      title: "The insulation, liner and moisture plan work as one assembly.",
      visual: <InsulatedDiagram />,
      caption: "Planning diagram. The final insulation, vapor-control, liner, floor, ventilation and monitoring scope is matched to the contents and climate.",
    },
    office: {
      eyebrow: "Occupied-space planning",
      title: "Access, comfort and egress belong in one approved plan.",
      visual: <OfficeDiagram />,
      caption: "Planning diagram. The final occupancy, door, windows, HVAC, electrical, accessibility and site requirements must be approved before use.",
    },
    hazmat: {
      eyebrow: "Hazard-specific review",
      title: "Containment, compatibility and ventilation start with the material.",
      visual: <HazmatDiagram />,
      caption: "Concept diagram only. The exact material, quantity, activity, site and governing requirements determine the engineered configuration and approvals.",
    },
    export: {
      eyebrow: "Export handoff",
      title: "We prepare the container. Your forwarder moves it.",
      visual: <ExportDiagram />,
      caption: "Scope diagram. UCD sells and prepares the container. A licensed freight forwarder must confirm carrier acceptance, cargo, customs, port handling and international transport.",
    },
  }[type];

  return (
    <section className={`section specialty-diagram-section specialty-diagram-${type}`} id="specialty-configuration">
      <div className="wrap specialty-diagram-grid">
        <div className="specialty-diagram-copy">
          <span className="eyebrow dark">{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <div className="specialty-note-list">
            {notes.map((note, index) => <article key={note.title}><b>0{index + 1}</b><div><h3>{note.title}</h3><p>{note.text}</p></div></article>)}
          </div>
          <a className="button primary" href="#quote-form">Confirm my configuration</a>
        </div>
        <div className="specialty-diagram-visual">{content.visual}<p>{content.caption}</p></div>
      </div>
    </section>
  );
}
