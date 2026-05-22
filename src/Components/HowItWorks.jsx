"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="w-7 h-7" />,
    title: "Find a Facility",
    description:
      "Browse through our wide range of sports venues — football turfs, badminton courts, swimming lanes, and more. Filter by sport type or search by name.",
  },
  {
    id: "02",
    icon: <CalendarCheck className="w-7 h-7" />,
    title: "Pick a Slot",
    description:
      "Choose your preferred date and available time slot. See real-time availability and pick the hours that fit your schedule.",
  },
  {
    id: "03",
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Confirm Booking",
    description:
      "Review your booking details and total price, then confirm. Your spot is instantly reserved — no calls, no waiting.",
  },
  {
    id: "04",
    icon: <Zap className="w-7 h-7" />,
    title: "Play & Enjoy",
    description:
      "Show up and play! Manage or cancel your booking anytime from your personal dashboard before the scheduled time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-200 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-orange-400 text-4xl md:text-5xl font-bold mt-3">
            How It <span className="text-orange-400">Works</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            From discovery to game time — book your favourite sports facility in
            just a few steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.08)] transition-all duration-300 group"
            >
              {/* Step number */}
              <span className="text-5xl font-black text-white group-hover:text-orange-400    transition-colors duration-300 leading-none select-none">
                {step.id}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-400/20 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;