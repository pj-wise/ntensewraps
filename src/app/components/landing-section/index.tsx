"use client";
import { motion } from "framer-motion";

export const LandingSection = () => {
  return (
    <div
      id="hero"
      className="border-primary border-b-4 min-h-[732px] flex items-center justify-center w-full bg-landingImage bg-cover bg-center bg-no-repeat relative layoutPadding z-50"
    >
      <div className="z-20 uppercase text-center pt-32 max-w-screen-lg ">
        <motion.h1
          className="font-bold text-7xl tracking-wider"
          variants={{
            hidden: { opacity: 0, y: -100 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <span className="gradientNtense gradientClipText">NTENSE</span> CAR
          WRAPS
        </motion.h1>
        <motion.div
          className="py-14"
          variants={{
            hidden: { opacity: 0, y: -100 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <p className="font-medium text-xl tracking-wider">
            LET US MAKE YOUR CAR STICK OUT FROM THE CROWD
          </p>
          <p className="font-normal text-xl tracking-wider">
            Give your car a unique look among others.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          variants={{
            hidden: { opacity: 0, y: -100 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <button className="hover:bg-background/80 border border-primary py-1.5 px-4 rounded">
            Contact us
          </button>
          <button className="hover:bg-background/80 border border-primary py-1.5 px-4 rounded">
            Learn more
          </button>
        </motion.div>
      </div>

      <div className="absolute bg-black/50 z-10 w-full h-full left-0 top-0"></div>
    </div>
  );
};
