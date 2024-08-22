"use client";
import Image from "next/image";
import "./intro-car.css";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const IntroCar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <motion.section
      className={cn(
        "introCarParent mx-auto relative aspect-[5/3] w-[200px] 3xs:w-[300px] sm:w-[370px] md:w-[420px] lg:w-[470px] xl:w-[520px]",
        className
      )}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 1,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <motion.div
        className={cn("object-contain")}
        variants={{
          hidden: { opacity: 0, y: -300 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <Image
          src="/img/intro-car.png"
          width={520}
          height={392}
          alt="intro-car"
        />
      </motion.div>
      <motion.div
        className={cn("dashedLine1", "relative")}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          },
        }}
        transition={{ ease: "easeOut" }}
      >
        <Image
          className=""
          src="/img/dashed-line-1.png"
          width={194}
          height={27}
          alt="dashed-1"
        />
        <span className="absolute sm:-left-4 md:-left-8 text-primary font-semibold">
          PPF
          <span className="text-foreground font-medium block">Fender</span>
        </span>
      </motion.div>

      <motion.div
        className={cn("dashedLine2", "flex relative")}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          },
        }}
        transition={{ ease: "easeOut" }}
      >
        <span className="absolute sm:-left-14 lg:-left-20 top-4 sm:-top-5 block text-primary font-medium">
          PPF
          <span className="text-foreground font-medium block ">Hood</span>
        </span>
        <Image
          className=""
          src="/img/dashed-line-2.png"
          width={33}
          height={128}
          alt="dashed-2"
        />
      </motion.div>

      <motion.div
        className={cn("dashedLine3", "relative")}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          },
        }}
        transition={{ ease: "easeOut" }}
      >
        <span className="absolute sm:-left-5 lg:-left-6 sm:-top-12 lg:-top-16 block text-primary font-medium">
          PPF
          <span className="text-foreground font-medium block ">Top</span>
        </span>
        <Image
          className=""
          src="/img/dashed-line-3.png"
          width={13}
          height={98}
          alt="dashed-3"
        />
      </motion.div>

      <motion.div
        className={cn("dashedLine4", "relative flex")}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          },
        }}
        transition={{ ease: "easeOut" }}
      >
        <Image
          className=""
          src="/img/dashed-line-4.png"
          width={189}
          height={13}
          alt="dashed-4"
        />
        <span className="absolute sm:-right-14 lg:-right-20 sm:-top-4 lg:-top-6 block text-primary font-medium">
          PPF
          <span className="text-foreground font-medium block ">Rear</span>
        </span>
      </motion.div>

      <motion.div
        className={cn("dashedLine5", "relative flex")}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          },
        }}
        transition={{ ease: "easeOut" }}
      >
        <Image
          className=""
          src="/img/dashed-line-5.png"
          width={134}
          height={134}
          alt="dashed-5"
        />
        <span className="absolute sm:-right-6 lg:-right-8 sm:-bottom-12 lg:-bottom-16 block text-primary font-medium">
          PPF
          <span className="text-foreground font-medium block ">Doors</span>
        </span>
      </motion.div>
    </motion.section>
  );
};
