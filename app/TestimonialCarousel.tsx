"use client";

import { useEffect, useState } from "react";

type Testimonial = { quote: string; person: string };

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  return (
    <section className="section testimonial-section" id="testimonials" aria-label="Buyer feedback">
      <div className="wrap testimonial-shell">
        <div className="testimonial-label">
          <span className="eyebrow dark">Buyer feedback</span>
          <strong>Short answers from people who needed storage handled.</strong>
        </div>
        <div className="testimonial-card" aria-live="polite">
          <span className="stars">★★★★★</span>
          <blockquote>“{current.quote}”</blockquote>
          <p>{current.person}</p>
          <div className="testimonial-controls" aria-label="Choose testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                className={index === active ? "active" : ""}
                key={testimonial.person}
                onClick={() => setActive(index)}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
