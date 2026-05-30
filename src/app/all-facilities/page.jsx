import FacilityCard from "@/Components/FacilityCard";


const AllFacilityPage = async() => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-facilities`);
     const facilities = await res.json();
    return (
        <div className="max-w-7xl mx-auto py-20 mt-8 md:mt-10">
            <h2 className="font-bold text-3xl mx-2 md:mx-0">All Facililties </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-10">
                {
                    facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                }
            </div>
        </div>
    );
};

export default AllFacilityPage;