"use client";

import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily Carter",
    role: "CEO of ACD Solution",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    text: "Choosing Sunergy was one of the best decisions we've made for our home. The solar installation was smooth, and we've seen a noticeable reduction in our monthly energy bills. It's empowering to know we're making a positive impact on the environment too!",
  },
  {
    name: "James Nolan",
    role: "Architect Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    text: "Working with Sunergy was seamless from start to finish. The team was professional, knowledgeable, and answered all our questions. Our solar system is performing better than expected, and we're thrilled with the savings. Highly recommend!",
  },
  {
    name: "Daniel Reyes",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    text: "We were initially nervous about switching to solar, but Sunergy made the entire process incredibly easy and completely stress-free. The crew was fast, efficient, and very courteous. Now we're saving money and proudly doing our part for the planet every day.",
  },
  {
    name: "Liam Turner",
    role: "Sustainability Consultant",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    text: "Sunergy made going solar simple, affordable, and truly hassle-free. The installation was quick, and their friendly support team guided us through every step. We're already seeing lower bills and love knowing we're confidently using clean, renewable energy.",
  },
  {
    name: "Sophia Bennett",
    role: "Eco-Home Owner",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    text: "I did a lot of thorough research before choosing Sunergy, and I'm very glad I did. Their service was consistently outstanding, and the results truly speak for themselves. Our solar system works perfectly, and we feel good about our smart decision every day.",
  },
  {
    name: "Ethan Brooks",
    role: "Tech Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop",
    text: "Sunergy was professional, efficient, and honest. The team respected our time and property, communicated clearly, listened attentively, acted responsibly, and the installation was smooth. I've recommended them to my neighbors.",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="shrink-0 w-[400px] bg-white p-8 rounded-md shadow-sm border border-gray-200 mx-4">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm">{testimonial.text}</p>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-sm font-medium mb-4 text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          Testimonials
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-black">
          What customers say.
        </h2>
      </div>

      <div className="relative w-full">
        {/* Row 1 - Left */}
        <div className="flex mb-8 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "200%" }} // Ensure container is wide enough
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "200%" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
