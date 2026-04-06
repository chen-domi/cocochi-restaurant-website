const reviews = [
  {
    quote: 'The sushi here is absolutely fresh and delicious. Kai and the team always make us feel welcome!',
    author: 'Sarah M.',
  },
  {
    quote: 'Best hibachi experience in the area. The skill of the chefs is incredible — we come back every month!',
    author: 'James T.',
  },
  {
    quote: "A family-owned gem! Every time we visit, we're impressed by the quality and service.",
    author: 'Maria L.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cocochi tracking-[0.25em] uppercase text-sm font-medium mb-3">Happy Guests</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Our Customers Say
          </h2>
          <div className="mt-4 w-16 h-1 bg-cocochi mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-cocochi" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed flex-1 italic">"{review.quote}"</p>
              <p className="mt-5 font-semibold text-gray-900">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
