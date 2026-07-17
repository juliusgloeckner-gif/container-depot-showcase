type UseCaseMosaicProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  columns: 3 | 4;
  items: string[];
  note?: string;
};

export function UseCaseMosaic({ eyebrow, title, lead, image, columns, items, note }: UseCaseMosaicProps) {
  const rows = Math.ceil(items.length / columns);
  return (
    <section className="section use-case-mosaic-section">
      <div className="wrap">
        <div className="section-heading split-heading">
          <div><span className="eyebrow dark">{eyebrow}</span><h2>{title}</h2></div>
          <p>{lead}</p>
        </div>
        <div className={`use-case-mosaic mosaic-${columns}`}>
          {items.map((item, index) => {
            const column = index % columns;
            const row = Math.floor(index / columns);
            const x = columns === 1 ? 0 : (column / (columns - 1)) * 100;
            const y = rows === 1 ? 0 : (row / (rows - 1)) * 100;
            return (
              <figure key={item}>
                <div
                  role="img"
                  aria-label={item}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: `${columns * 100}% ${rows * 100}%`,
                    backgroundPosition: `${x}% ${y}%`,
                  }}
                />
                <figcaption>{item}</figcaption>
              </figure>
            );
          })}
        </div>
        {note && <p className="mosaic-note">{note}</p>}
      </div>
    </section>
  );
}
