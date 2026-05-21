"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiClock1, CiLocationOn } from "react-icons/ci";

const FacilityCard = ({facility}) => {
    const {_id, name, location, category, pricePerHour, rating, availableSlots, image, description} = facility;
    return (
       <Card className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
  
  {/* Image Section */}
  <div className="relative overflow-hidden">
    
    {/* Top Left Badge */}
    <div className="absolute top-4 left-4 z-10">
      <span className="rounded-full bg-black/70 px-4 py-1 text-sm font-medium text-white backdrop-blur-md">
        {category}
      </span>
    </div>

    {/* Top Right Badge */}
    <div className="absolute top-4 right-4 z-10">
      <span className="rounded-full bg-orange-400/80  px-4 py-1 text-sm font-medium text-white shadow-md">
        {pricePerHour}/hr
      </span>
    </div>

    <Image
      src={image}
      alt={name}
      height={500}
      width={500}
      className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>

  {/* Content Section */}
  <div className="space-y-4 p-5">
    
    {/* Title */}
    <div>
      <h3 className="text-2xl font-bold text-gray-800">
        {name}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>

    {/* Info */}
    <div className="space-y-3 border-t pt-4 text-gray-600">
      
      <div className="flex items-center gap-3">
        <CiLocationOn className="text-xl text-red-600" />
        <p className="text-sm font-medium">{location}</p>
      </div>

      <div className="flex items-center gap-3">
        <CiClock1 className="text-xl text-blue-600" />
        <p className="text-sm font-medium">
          <span className="text-xl font-bold text-red-800">{availableSlots}</span> available slots
        </p>
      </div>
    </div>

    {/* Button */}
    <Link href={`/all-facilities/${_id}`}>
    <button className="mt-3 w-full rounded-xl bg-orange-400 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500">
     Book Now
    </button>
    </Link>
  </div>
</Card>
    );
};

export default FacilityCard;