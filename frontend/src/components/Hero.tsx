export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center text-white text-center"
      style={{
        background: 'linear-gradient(135deg, #1a0a00 0%, #2d0f00 40%, #1a0505 70%, #0d0d0d 100%)',
      }}
    >
      {/* Subtle decorative overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #d4380d 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b0000 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <p className="text-cocochi tracking-[0.3em] uppercase text-sm font-medium mb-4">
          Authentic Asian Cuisine
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Cocochi Asian Cuisine
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 tracking-wide">
          Sushi &nbsp;|&nbsp; Hibachi &nbsp;|&nbsp; Chinese Takeout
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-cocochi text-white px-8 py-4 rounded font-semibold text-lg hover:bg-cocochi-dark transition-colors duration-200"
          >
            View Menu
          </a>
          <a
            href="tel:4137862777"
            className="border-2 border-white text-white px-8 py-4 rounded font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            Call to Order
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
