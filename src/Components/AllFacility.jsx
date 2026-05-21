import { Button } from "@heroui/react";
import FacilityCard from "./FacilityCard";
import Link from "next/link";


const AllFacility = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-facilities`);

    const facilities = await res.json();
    // console.log(facilities);
    const filteredFacilities = facilities.slice(0, 6);
    // console.log(filteredFacilities);

    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    return (
        <section className="max-w-7xl mx-auto py-20">
           <div>
            <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold">Featured Facilities </h2>
                <Button className={'rounded-none bg-orange-400 text-white shadow hover:shadow-2xl'}>
                    <Link href={'/all-facilities'}>View More...</Link>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-12 mt-10 ">
                {
                    filteredFacilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)
                }
            </div>
           </div>
        </section>
    );
};

export default AllFacility;