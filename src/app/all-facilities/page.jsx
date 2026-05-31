import FacilityCard from "@/Components/FacilityCard";
import SearchFilter from "@/Components/SearchFilter";
import { h1 } from "framer-motion/client";

const AllFacilityPage = async ({ searchParams }) => {
  const { search = "", sport = "" } = await searchParams;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/all-facilities?search=${search}&sport=${sport}`,
    {
      cache: "no-store",
    },
  );
  const facilities = await res.json();
  return (
    <div className="max-w-7xl mx-auto py-20 mt-8 md:mt-10 w-full">
      <div className="flex items-center justify-between ">
        <h2 className="font-bold text-3xl mx-2 md:mx-0">All Facililties </h2>
        <SearchFilter />
      </div>
      {facilities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-7xl mb-6">🏟️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Facilities Found
          </h2>
          <p className="text-gray-400 max-w-sm">
            We couldn't find any facilities matching your search. Try a
            different name or sport type.
          </p>
         
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-10">
          {facilities.map((facility) => (
            <FacilityCard key={facility._id} facility={facility}></FacilityCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFacilityPage;
