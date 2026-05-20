import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-[url('/assets/banner.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 text-center text-white space-y-6">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight  drop-shadow-lg tracking-tight">
          Book Your Next Experience  <br className="hidden sm:block" />
          In Seconds
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
          Discover and reserve the best fields, destinations, and experiences near you — fast, easy, and hassle-free.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">

          <button className="uppercase bg-orange-400  hover:scale-[1.04] transition px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
            Explore Facilities
          </button>

         

        </div>
      </div>
    </section>
  );
};

export default Banner;