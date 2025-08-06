export default function Home() {
  return (
    <div className="bg-bannerImg bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
      <div className="bg-blackOverlay bg-opacity-60 w-full h-screen flex items-center">
        <div className="container mx-auto px-4 py-16 text-white text-center md:text-left">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
            News and journals
          </h1>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
            Planning to transition <br className="hidden md:block" />
            to a new career?
          </h1>
        </div>
      </div>
    </div>
  );
}
