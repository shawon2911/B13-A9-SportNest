"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: "Arif Hossain",
    sport: "Football",
    avatar: "AH",
    rating: 5,
    review:
      "SportNest made booking our weekly football turf incredibly easy. No more back-and-forth calls — just pick a slot and show up. Absolutely love it!",
  },
  {
    id: 2,
    name: "Tasnim Rahman",
    sport: "Badminton",
    avatar: "TR",
    rating: 5,
    review:
      "I use SportNest every weekend for badminton. The courts are verified, the booking process is smooth, and I can cancel if something comes up. Highly recommended.",
  },
  {
    id: 3,
    name: "Sabbir Ahmed",
    sport: "Cricket",
    avatar: "SA",
    rating: 4,
    review:
      "Finally a platform that actually works. Found a cricket ground near my area in minutes, booked a 2-hour slot, and everything went perfectly on the day.",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    sport: "Swimming",
    avatar: "NJ",
    rating: 5,
    review:
      "Booking a swimming lane used to be such a hassle. SportNest changed that completely. Clean interface, instant confirmation — this is how it should always be.",
  },
  {
    id: 5,
    name: "Rayhan Kabir",
    sport: "Tennis",
    avatar: "RK",
    rating: 5,
    review:
      "Our tennis club switched to SportNest for all court bookings. Managing slots for multiple members has never been this organised. Great platform!",
  },
  {
    id: 6,
    name: "Mitu Akter",
    sport: "Basketball",
    avatar: "MA",
    rating: 4,
    review:
      "The real-time availability feature is a game changer. I can see open slots instantly and book within seconds. SportNest is a must-have for any sports enthusiast.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? "text-orange-400" : "text-gray-700"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ClientsFeedback = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-orange-400 text-4xl md:text-5xl font-bold mt-3">
            What Our <span className="text-orange-400">Players</span> Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            Thousands of athletes trust SportNest for their weekly bookings.
            Here's what they have to say.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb, index) => (
            <motion.div
              key={fb.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-6 flex flex-col gap-5 hover:border-orange-400/40 hover:shadow-[0_0_25px_rgba(251,146,60,0.07)] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-orange-400 group-hover:text-orange-400/60 transition-colors duration-300" />

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "{fb.review}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-800" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-orange-400/10 border border-orange-400/30 flex items-center justify-center text-orange-400 font-bold text-sm">
                    {fb.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{fb.name}</p>
                    <p className="text-gray-500 text-xs">{fb.sport} Player</p>
                  </div>
                </div>
                <StarRating count={fb.rating} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "500+", label: "Bookings Made" },
            { value: "50+", label: "Verified Venues" },
            { value: "10+", label: "Sport Categories" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-950 border border-gray-800 rounded-xl py-5 text-center"
            >
              <p className="text-orange-400 text-3xl font-black">{stat.value}</p>
              <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsFeedback;