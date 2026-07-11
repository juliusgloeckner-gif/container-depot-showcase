import Image from "next/image";

export type InventoryImages = [string, string, string, string];

const options = [
  { name: "20FT Standard", price: "$1,950", detail: "160 sq ft. Easy to place when access or available ground is limited." },
  { name: "40FT Standard", price: "$4,490", detail: "320 sq ft. More capacity and the best value per square foot." },
  { name: "40FT High Cube", price: "$4,890", detail: "An extra 12 inches of height for bulky equipment and stacked inventory." },
  { name: "Custom Modified", price: "Built to spec", detail: "Add shelving, lighting, insulation, personnel doors, vents or windows." },
] as const;

type InventorySectionProps = {
  images: InventoryImages;
  context?: string;
  homepage?: boolean;
};

export function InventorySection({ images, context = "your site", homepage = false }: InventorySectionProps) {
  return (
    <section className={`section inventory-section ${homepage ? "homepage-inventory" : "vertical-inventory"}`} id="inventory">
      <div className="wrap">
        <div className="section-heading split-heading">
          <div><span className="eyebrow dark">Choose your container</span><h2>Four sizes and setups. One delivered price.</h2></div>
          <p>Compare the options for {context}. We confirm nearby inventory, condition and the complete delivered price for your ZIP.</p>
        </div>
        <div className="inventory-grid">
          {options.map((item, index) => (
            <article className="inventory-card" key={item.name}>
              <div className="image-wrap">
                <Image src={images[index]} alt={`${item.name} for ${context}`} fill sizes="(max-width: 800px) 100vw, 25vw" />
                {index === 2 && <div className="height-comparison" aria-hidden="true"><span>Standard <b>8&apos;6&quot;</b></span><span>High Cube <b>9&apos;6&quot;</b></span></div>}
                {index === 3 && <span className="modified-badge">Modified access</span>}
              </div>
              <div className="inventory-body">
                <span className="stock">Available</span>
                <h3>{item.name}</h3>
                <strong className="card-price">{item.price}</strong>
                <p>{item.detail}</p>
                <a href="#quote">Get delivered price <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="price-note">Starting prices shown. Final price depends on container condition, local availability and delivery ZIP.</p>
      </div>
    </section>
  );
}
