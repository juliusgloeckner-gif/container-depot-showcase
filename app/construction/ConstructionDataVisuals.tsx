import Link from "next/link";

const SOURCES = {
  twenty: "https://www.hapag-lloyd.com/en/services-information/cargo-fleet/container/20-standard.html",
  forty: "https://www.hapag-lloyd.com/en/services-information/cargo-fleet/container/40-standard.html",
  highCube: "https://www.hapag-lloyd.com/en/services-information/cargo-fleet/container/40-standard-high-cube.html",
  lostTime: "https://fmicorp.com/insights/quick-reads/stopping-supply-chain-risks-from-impacting-the-field",
  productivity: "https://fmicorp.com/insights/thought-leadership/construction-labor-productivity-the-20-billion-opportunity",
  theft: "https://www.ner.net/solutions/",
} as const;

function FootprintGraphic() {
  return (
    <svg viewBox="0 0 560 310" role="img" aria-labelledby="footprint-title footprint-desc">
      <title id="footprint-title">Nominal container footprint comparison</title>
      <desc id="footprint-desc">A relative-scale plan view. The 20 foot container and 40 foot container have the same nominal eight foot width, while the 40 foot container is twice as long.</desc>
      <rect width="560" height="310" rx="10" fill="#eef2f4" />
      <g className="data-container-short">
        <rect x="90" y="67" width="190" height="58" rx="2" fill="#34495b" stroke="#081421" strokeWidth="4" />
        {Array.from({ length: 9 }, (_, index) => <line key={index} x1={109 + index * 19} y1="72" x2={109 + index * 19} y2="120" stroke="#657887" strokeWidth="2" />)}
        <rect x="267" y="71" width="9" height="50" fill="#f26a18" />
      </g>
      <g className="data-container-long">
        <rect x="90" y="201" width="380" height="58" rx="2" fill="#d85109" stroke="#081421" strokeWidth="4" />
        {Array.from({ length: 19 }, (_, index) => <line key={index} x1={109 + index * 19} y1="206" x2={109 + index * 19} y2="254" stroke="#f58a49" strokeWidth="2" />)}
        <rect x="457" y="205" width="9" height="50" fill="#081421" />
      </g>
      <text x="90" y="28" className="data-svg-kicker">20FT STANDARD</text>
      <text x="90" y="54" className="data-svg-value">160 SQ FT NOMINAL</text>
      <text x="90" y="166" className="data-svg-kicker">40FT STANDARD</text>
      <text x="90" y="190" className="data-svg-value">320 SQ FT NOMINAL</text>
      <path d="M90 143h190M90 135v16M280 135v16M90 277h380M90 269v16M470 269v16" stroke="#f26a18" strokeWidth="4" />
      <text x="280" y="303" textAnchor="middle" className="data-svg-small">NOMINAL PLAN VIEW - RELATIVE SCALE - SAME 8FT WIDTH</text>
    </svg>
  );
}

function VolumeGraphic() {
  const bars = [
    { x: 70, height: 83, value: "1,172", label: "20FT", color: "#597083" },
    { x: 222, height: 169, value: "2,390", label: "40FT", color: "#34495b" },
    { x: 374, height: 190, value: "2,694", label: "40FT HC", color: "#f26a18" },
  ];
  return (
    <svg viewBox="0 0 560 310" role="img" aria-labelledby="volume-title volume-desc">
      <title id="volume-title">Representative internal container volume</title>
      <desc id="volume-desc">Hapag-Lloyd lists 1,172 cubic feet for a 20 foot standard, 2,390 cubic feet for a 40 foot standard, and 2,694 cubic feet for a 40 foot high cube.</desc>
      <rect width="560" height="310" rx="10" fill="#eef2f4" />
      <path d="M49 260H518" stroke="#aebbc4" strokeWidth="3" />
      {bars.map((bar, index) => (
        <g key={bar.label} className={`volume-bar volume-bar-${index + 1}`}>
          <rect x={bar.x} y={260 - bar.height} width="112" height={bar.height} rx="4" fill={bar.color} />
          <text x={bar.x + 56} y={244 - bar.height} textAnchor="middle" className="data-svg-value">{bar.value}</text>
          <text x={bar.x + 56} y="284" textAnchor="middle" className="data-svg-kicker">{bar.label}</text>
        </g>
      ))}
      <rect x="350" y="12" width="174" height="29" rx="4" fill="#081421" />
      <text x="437" y="32" textAnchor="middle" className="data-svg-pill">HIGH CUBE +12.7%</text>
      <text x="49" y="28" className="data-svg-small">REPRESENTATIVE CAPACITY - ACTUAL UNITS VARY</text>
    </svg>
  );
}

function LostTimeGraphic() {
  return (
    <svg viewBox="0 0 560 310" role="img" aria-labelledby="lost-title lost-desc">
      <title id="lost-title">Recoverable lost time on active construction sites</title>
      <desc id="lost-desc">FMI reports that approximately 32 percent of all time on an active construction site is recoverable lost time, while the other 68 percent is primary and secondary time. The examples listed are included within the combined recoverable category, not separately measured shares.</desc>
      <rect width="560" height="310" rx="10" fill="#081421" />
      <g transform="translate(145 154) rotate(-90)">
        <circle r="86" fill="none" stroke="#667784" strokeWidth="33" />
        <circle className="lost-time-ring" r="86" fill="none" stroke="#f26a18" strokeWidth="33" strokeLinecap="butt" pathLength="100" strokeDasharray="32 68" />
      </g>
      <text x="145" y="147" textAnchor="middle" className="data-svg-value light large">32%</text>
      <text x="145" y="174" textAnchor="middle" className="data-svg-kicker light">RECOVERABLE</text>
      <text x="282" y="33" className="data-svg-small light">SHARE OF ALL ACTIVE-SITE TIME</text>
      <rect x="282" y="49" width="15" height="15" rx="2" fill="#f26a18" />
      <text x="309" y="62" className="data-svg-small light">RECOVERABLE LOST TIME 32%</text>
      <rect x="282" y="75" width="15" height="15" rx="2" fill="#667784" />
      <text x="309" y="88" className="data-svg-small light">PRIMARY + SECONDARY TIME 68%</text>
      <path d="M282 107h231" stroke="#40515e" strokeWidth="2" />
      <text x="282" y="131" className="data-svg-kicker orange">RECOVERABLE EXAMPLES</text>
      <g stroke="#f26a18" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="294" cy="157" r="10" /><path d="M294 151v7l5 3" />
        <circle cx="292" cy="190" r="8" /><path d="m298 196 8 8" />
        <path d="M284 227c3-7 11-10 18-6l4 3m0 0-1-7m1 7-7 1M307 239c-3 7-11 10-18 6l-4-3m0 0 1 7m-1-7 7-1" />
      </g>
      <text x="315" y="162" className="data-svg-note light">Waiting for tools or material</text>
      <text x="315" y="195" className="data-svg-note light">Looking for material</text>
      <text x="315" y="236" className="data-svg-note light">Rework and unplanned delays</text>
      <text x="282" y="277" className="data-svg-small light">EXAMPLES ARE NOT INDIVIDUAL SHARES</text>
    </svg>
  );
}

function TheftGraphic() {
  return (
    <svg viewBox="0 0 560 310" role="img" aria-labelledby="theft-title theft-desc">
      <title id="theft-title">Annual heavy equipment theft estimate</title>
      <desc id="theft-desc">The National Equipment Register estimates that 300 million to 1 billion dollars in heavy equipment is stolen every year.</desc>
      <rect width="560" height="310" rx="10" fill="#eef2f4" />
      <text x="54" y="55" className="data-svg-kicker">NER ESTIMATED ANNUAL RANGE</text>
      <text x="54" y="101" className="data-svg-value large">$300M TO $1B</text>
      <path d="M65 182H495" stroke="#bac5cc" strokeWidth="18" strokeLinecap="round" />
      <path className="theft-range-line" d="M194 182H495" stroke="#f26a18" strokeWidth="18" strokeLinecap="round" />
      <circle cx="194" cy="182" r="18" fill="#081421" stroke="#fff" strokeWidth="5" />
      <circle cx="495" cy="182" r="18" fill="#081421" stroke="#fff" strokeWidth="5" />
      <text x="65" y="228" textAnchor="middle" className="data-svg-small">$0</text>
      <text x="194" y="228" textAnchor="middle" className="data-svg-kicker">$300M</text>
      <text x="495" y="228" textAnchor="middle" className="data-svg-kicker">$1B</text>
      <text x="54" y="270" className="data-svg-small">HEAVY EQUIPMENT, NOT A SHIPPING-CONTAINER THEFT COUNT</text>
    </svg>
  );
}

function ProductivityGraphic() {
  return (
    <svg viewBox="0 0 560 310" role="img" aria-labelledby="productivity-title productivity-desc">
      <title id="productivity-title">Contractor labor productivity improvement potential</title>
      <desc id="productivity-desc">FMI found that 79 percent of contractors could improve labor productivity by 6 percent or more with better management.</desc>
      <rect width="560" height="310" rx="10" fill="#081421" />
      <text x="52" y="57" className="data-svg-kicker orange">FMI 2023 LABOR PRODUCTIVITY STUDY</text>
      <text x="52" y="120" className="data-svg-value light large">79%</text>
      <text x="52" y="153" className="data-svg-note light">could improve labor productivity</text>
      <text x="52" y="184" className="data-svg-note light">by at least 6% with better management</text>
      <rect x="52" y="223" width="456" height="34" rx="17" fill="#2a3d4b" />
      <rect className="productivity-progress" x="52" y="223" width="360" height="34" rx="17" fill="#f26a18" />
      <text x="420" y="247" className="data-svg-kicker light">79 OF 100</text>
    </svg>
  );
}

export const dataSources = SOURCES;
export const DataGraphics = {
  Footprint: FootprintGraphic,
  Volume: VolumeGraphic,
  LostTime: LostTimeGraphic,
  Theft: TheftGraphic,
  Productivity: ProductivityGraphic,
};

export function ConstructionStatsTeaser() {
  return (
    <section className="section construction-data-teaser" aria-labelledby="jobsite-data-title">
      <div className="wrap">
        <div className="section-heading split-heading">
          <div><span className="eyebrow dark">Jobsite storage by the numbers</span><h2 id="jobsite-data-title">Size the box. Protect the workflow.</h2></div>
          <p>These figures help frame a storage decision. They do not replace an exact inventory review, access check or site-specific security plan.</p>
        </div>
        <div className="data-teaser-grid">
          <article><FootprintGraphic /><div><strong>Twice the nominal footprint</strong><p>A 40FT unit provides a nominal 320 square feet, compared with 160 square feet for a 20FT unit.</p></div></article>
          <article><VolumeGraphic /><div><strong>Volume depends on height too</strong><p>A representative 40FT High Cube provides 2,694 cubic feet, about 12.7% more than a 40FT standard.</p></div></article>
          <article><LostTimeGraphic /><div><strong>Keep needed resources close</strong><p>FMI found approximately 32% of active-site time is recoverable lost time, including time spent waiting for or looking for materials and tools.</p></div></article>
        </div>
        <div className="data-teaser-sources">
          <span>Sources:</span>
          <a href={SOURCES.twenty} target="_blank" rel="noreferrer">Hapag-Lloyd 20FT specifications</a>
          <a href={SOURCES.forty} target="_blank" rel="noreferrer">40FT specifications</a>
          <a href={SOURCES.highCube} target="_blank" rel="noreferrer">High Cube specifications</a>
          <a href={SOURCES.lostTime} target="_blank" rel="noreferrer">FMI field research</a>
        </div>
        <div className="data-teaser-action">
          <div><span>Use the data, then confirm the real project.</span><p>Compare all five graphics, download the social-ready charts, or send the ZIP and preferred size for a delivered price.</p></div>
          <div><Link className="button outline-dark" href="/construction/resources/construction-container-statistics">Open the data brief</Link><a className="button primary" href="#quote-form">Get my delivered price</a></div>
        </div>
      </div>
    </section>
  );
}
