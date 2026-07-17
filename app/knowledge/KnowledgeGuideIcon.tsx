const paths: Record<string, React.ReactNode> = {
  buying: <><path d="M20 58h60v22H20zM27 58V31h46v27M39 43h22"/><circle cx="35" cy="84" r="6"/><circle cx="67" cy="84" r="6"/></>,
  placement: <><path d="M14 75h72M20 75V45h45v30M70 75V28M70 28l15 11M70 28L55 39"/><path d="M29 54h27"/></>,
  equipment: <><path d="M14 79h72V31H14zM25 43h25v14H25zM25 64h16M55 43h20v28H55z"/></>,
  inputs: <><path d="M22 80h56M28 80V42h44v38M36 42l7-16h14l7 16M39 55h22M39 66h22"/></>,
  safety: <><path d="M50 13l35 16v24c0 23-15 31-35 38-20-7-35-15-35-38V29zM50 34v25M50 72v2"/></>,
  security: <><rect x="22" y="43" width="56" height="43" rx="4"/><path d="M34 43V31c0-22 32-22 32 0v12M50 59v13"/></>,
  compliance: <><path d="M25 15h50v72H25zM35 34h30M35 47h30M35 60h20"/><path d="M57 72l7 7 14-17"/></>,
  operations: <><circle cx="50" cy="50" r="33"/><path d="M50 28v24l18 10M18 84h64"/></>,
  inventory: <><path d="M18 29h64v58H18zM18 50h64M39 29v58M60 29v58"/></>,
  climate: <><path d="M31 19v46a19 19 0 1 0 38 0V19a19 19 0 0 0-38 0zM50 31v38"/></>,
  economics: <><path d="M20 80V55M40 80V40M60 80V25M80 80V12M13 80h74"/></>,
  "fit-access": <><path d="M12 75h76M20 75V38h60v37M30 57h40M35 57l7-15h22l7 15"/><circle cx="38" cy="68" r="6"/><circle cx="65" cy="68" r="6"/></>,
  preservation: <><path d="M50 12v76M27 25l46 50M73 25L27 75M16 50h68"/><circle cx="50" cy="50" r="35"/></>,
  recreation: <><circle cx="32" cy="68" r="16"/><circle cx="71" cy="68" r="16"/><path d="M32 68l14-28h17l8 28M46 40l14 28M23 40h23"/></>,
  modifications: <><path d="M20 80h60V28H20zM30 80V48h40v32M40 59h20"/><path d="M30 20h40M36 14v12M64 14v12"/></>,
  ownership: <><path d="M15 47l35-29 35 29M23 43v42h54V43M40 85V60h20v25"/></>,
};

export function KnowledgeGuideIcon({ category }: { category: string }) {
  return <svg className="resource-guide-icon" viewBox="0 0 100 100" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">{paths[category] ?? paths.operations}</svg>;
}
