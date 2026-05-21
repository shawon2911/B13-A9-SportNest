import BookingCancleButton from "@/Components/BookingCancleButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const userId = user?.id;
  console.log("session user id", userId);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/booking/${userId}`
  );
  const bookings = await res.json();

  return (
    <section className="py-12 md:py-20  w-full bg-gray-200 px-4">
      <div className="max-w-7xl mx-auto my-10 md:my-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          My Bookings
        </h2>
        <p className="text-gray-500 mt-3">
          View and manage all your booked sports facilities in one place.
        </p>

        {bookings.length === 0 ? (
          <div className="min-h-[50vh] bg-white rounded-2xl my-10 flex justify-center items-center">
            <div className="text-center space-y-3 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-red-600">
                No bookings found
              </h2>
              <p className="text-lg md:text-xl text-red-600">
                You haven't booked anything yet.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-5">
            {bookings.map((booking) => (
              <div key={booking._id}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-gray-200 bg-white p-5 md:p-10 mt-5 shadow-sm gap-5">
                  {/* Left Section */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5">
                    {/* Image */}
                    <Image
                      src={booking.image}
                      alt={booking.name}
                      height={200}
                      width={300}
                      className="h-44 w-full sm:h-30 sm:w-40 rounded-xl object-cover"
                    />

                    {/* Content */}
                    <div className="space-y-3 md:space-y-5">
                      {/* Title */}
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {booking.name}
                      </h2>

                      {/* Details */}
                      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-8 text-gray-500">
                        <div>
                          <div className="flex items-center gap-2">
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
                          <div className="flex items-center mt-2">
                            <MdAttachMoney className="text-orange-600" />
                            <p className="font-semibold text-xl text-orange-700">
                              {booking.totalPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Cancel Button */}
                  <div className="sm:self-center">
                    <BookingCancleButton booking={booking} />
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

export default MyBookingsPage;