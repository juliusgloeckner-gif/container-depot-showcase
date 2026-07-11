type Testimonial = { quote: string; person: string };

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="section testimonial-section" aria-label="Customer reviews">
      <div className="wrap testimonial-grid">
        {testimonials.map((testimonial) => (
          <blockquote className="testimonial-card" key={testimonial.person}>
            <span className="stars">★★★★★</span>
            <p>“{testimonial.quote}”</p>
            <footer>{testimonial.person}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
