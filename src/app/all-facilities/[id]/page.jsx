import BookingConfirmForm from "@/Components/BookingConfirmForm";
import { auth } from "@/lib/auth";
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const FacilityDetailsPage = async ({ params }) => {
  const { token } = await auth.api.getToken({
    headers: await headers()
  });
  console.log(token);
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/all-facilities/${id}`,{
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );
  const facility = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-10 md:py-20 mt-20 md:mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15">
        {/* LEFT SIDE - INFO */}
        <div className="space-y-5 p-3 md:p-5">
          <div className="relative w-full h-56 sm:h-64 md:h-75 rounded-xl overflow-hidden">
            <Image
              src={facility.image}
              alt={facility.name}
              fill
              className="object-cover"
            />
            
          </div>

          <h1 className="text-2xl md:text-3xl font-bold">{facility.name}</h1>

          <p className="text-gray-600">{facility.description}</p>

          <div className="space-y-2 text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center px-2 md:px-6 gap-4">
            <div className="space-y-3">
              <p>
                📍 <span className="font-medium">{facility.location}</span>
              </p>
              <span className="flex items-center gap-3">
                <p className="font-medium">⚽ Category:</p>
                <Chip className="capitalize bg-orange-400/80 text-white">
                  {facility.category}
                </Chip>
              </span>
              <p className="font-medium">
                ⭐ Rating:{" "}
                <span className="font-bold text-xl text-red-800">
                  {facility.rating}
                </span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-medium">
                💺 Available Slots:{" "}
                <span className="font-bold text-xl text-red-800">
                  {facility.availableSlots}
                </span>
              </p>
              <p className="font-medium">
                💰 Price per hour:{" "}
                <span className="font-bold text-xl text-red-800">
                  {facility.pricePerHour}
                </span>{" "}
                BDT
              </p>
            </div>
          </div>
        </div>

        <BookingConfirmForm facility={facility} />
      </div>
    </div>
  );
};

export default FacilityDetailsPage;