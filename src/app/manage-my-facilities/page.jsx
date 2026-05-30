import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

import { MdAttachMoney } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import CancleButton from "@/Components/CancleButton";
import EditFacility from "@/Components/EditFacility";

const ManageMyFacilitiesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  // console.log(session);
  const userEmail = session?.user?.email;

  const {token} = await auth.api.getToken({
    headers: await headers()
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/my-facilities/${userEmail}`,{
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );
  const ownerAddedFacilities = await res.json();
  // console.log(ownerAddedFacilities);

  return (
   <section className="py-12 md:py-35 w-full bg-gray-200 px-4">
  <div className="max-w-7xl mx-auto my-10 md:my-0">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      My Facilities
    </h2>
    <p className="text-gray-500 mt-3">
      View and manage all your added sports facilities in one place.
    </p>

    {ownerAddedFacilities.length === 0 ? (
      <div className="min-h-[50vh] bg-white rounded-2xl my-10 flex justify-center items-center px-4">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600">
            No Facilities Found
          </h2>
          <p className="text-lg md:text-xl text-red-600">
            You haven't added anything yet.
          </p>
        </div>
      </div>
    ) : (
      <div className="mt-5 space-y-5">
        {ownerAddedFacilities.map((facility) => (
          <div key={facility._id}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl border border-gray-200 bg-white p-5 md:p-10 shadow-sm gap-5">

              {/* Left Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 w-full">

                {/* Image */}
                <Image
                  src={facility.image}
                  alt={facility.name}
                  height={200}
                  width={300}
                  className="h-44 w-full sm:h-36 sm:w-40 rounded-xl object-cover"
                />

                {/* Content */}
                <div className="space-y-3 md:space-y-3 w-full">

                  {/* Title */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {facility.name}
                      </h2>
                      <Chip className="capitalize bg-orange-400/90 text-white w-fit">
                        {facility.category}
                      </Chip>
                    </div>

                    <p className="text-gray-500 mt-2">
                      {facility.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-3 text-gray-500">

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <div className="flex items-center gap-2">
                        <CiLocationOn className="text-orange-600" />
                        <p>{facility.location}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <MdAttachMoney className="text-orange-600" />
                        <p className="font-semibold text-xl text-orange-700">
                          {facility.pricePerHour}/hr
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <div className="flex items-center gap-2">
                        <FcRating className="text-orange-400" />
                        <p>{facility.rating}</p>
                      </div>

                      <div>
                        <p className="text-lg text-orange-400 font-semibold ">
                          {facility.availableSlots}{" "}
                          <span className="text-gray-500 text-md">available slots</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section Buttons */}
              <div className="flex flex-row sm:flex-row items-center lg:flex-col gap-3 w-full lg:w-auto">
                <CancleButton
                  itemId={facility._id}
                  itemName={facility.name}
                  endpoint="all-facilities"
                  buttonText="Delete"
                />
                <EditFacility facility={facility} />
              </div>

            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</section>
  );
};

export default ManageMyFacilitiesPage;
