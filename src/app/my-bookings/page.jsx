

import BookingCancleButton from "@/Components/BookingCancleButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";


const MyBookingsPage = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking`);
  // const bookings = await res.json();
  // console.log(bookings);

   const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user;
// console.log(user);
const userId = user?.id;
console.log("session user id", userId);
// console.log(session);
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/${userId}`);
 const bookings = await res.json();
//  console.log(bookings);
    
  return (
    <section className=" py-20 w-full bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">My Bookings </h2>
      <p className="text-gray-500 mt-3">
        View and manage all your booked sports facilities in one place.
      </p>
     {
      bookings.length === 0 ? 
      <div className="min-h-[50vh] bg-white rounded-2xl my-10 flex justify-center items-center">
        <div>
          <h2 className="text-2xl text-red-600">No bookings found</h2>
        <p className="text-xl text-red-600">You haven’t booked anything yet.</p>
        </div>
      </div> :
       <div className="mt-5">
        {bookings.map((booking) => (
          <div key={booking._id}>
            <div className="flex items-center justify-between  rounded-2xl border border-gray-200 bg-white p-10 mt-5 px-10 shadow-sm">
              {/* Left Section */}
              <div className="flex items-center gap-5 ">
                {/* Image */}
                <Image
                  src={booking.image}
                  alt={booking.name}
                  height={200}
                  width={300}
                  
                  className="h-30 w-40 rounded-xl object-cover"
                />

                {/* Content */}
                <div className="space-y-5">
                  {/* Title + Badge */}
                  <div className="">
                    <h2 className="text-2xl font-bold text-gray-900">
                     {booking.name}
                    </h2>

                    
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap items-center gap-8   text-gray-500">
                   <div>
                     <div className="flex items-center gap-2 ">
                      <CiLocationOn className="text-orange-600" />
                      <p>{booking.location}</p>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <CiCalendar className="text-orange-600" />
                      <p>{booking.date}</p>
                    </div>
                   </div>

                    <div>
                        <div className="flex items-center gap-2">
                      <CiClock2 className="text-orange-600" />
                      <p>{booking.timeSlot}</p>
                    </div>

                    <div className="flex items-center  mt-2">
                      <MdAttachMoney className="text-orange-600" />
                      <p className="font-semibold text-xl  text-orange-700">{booking.totalPrice}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
             
              <BookingCancleButton booking={booking} />
            </div>
          </div>
        ))}
      </div>
     }
      </div>
    </section>
  );
};

export default MyBookingsPage;
