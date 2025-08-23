export default function BlogTwo() {
  return (
    <section className="bg-[url('/public/image/background.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen">
      {/* Overlay */}
      <div className="bg-black/60 w-full h-screen flex items-center">
        {/* Content */}
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 text-white text-center md:text-left">
          
          {/* Small Heading */}
          <h2 className="font-semibold uppercase tracking-widest text-sm sm:text-base md:text-lg mb-3">
            News and journals
          </h2>

          {/* Main Heading */}
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Planning to transition <br className="hidden sm:block" /> to a new career?
          </h1>

          {/* Subtext */}
          <p className="text-gray-200 mt-6 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Explore our latest insights and strategies to successfully pivot your career
            with confidence and clarity.
          </p>

      
        </div>
      </div>
    </section>
  );
}
