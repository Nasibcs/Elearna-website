export default function Home() {
  return (
    <div className="bg-bannerImg bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="bg-blackOverlay flex items-end min-h-screen w-full">
        <div className="container px-4 py-16 text-white text-center md:text-left">
          <h1 className="font-bold text-xl md:text-2xl">News and journals</h1>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">
            Planning to transition <br className="hidden md:block" /> to a new career?
          </h1>
        </div>
      </div>
    </div>
  );
}
