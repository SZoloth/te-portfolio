'use client';

import { LCDText } from "@/components/ko-ii/LCD";
import { Icons } from "@/components/ko-ii/SegmentIcons";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <motion.div 
      className="flex flex-col gap-6 md:gap-8 h-full"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      
      {/* Hero Section - Big Impact */}
      <div className="flex flex-col gap-2 mt-4 relative">
        <motion.div 
          className="absolute -right-4 top-0 opacity-20 rotate-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
           <Icons.Grid className="w-24 h-24" color="#FF5700" />
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <LCDText text="PRODUCT" size="hero" color="orange" />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <LCDText text="MANAGER" size="xl" color="white" className="opacity-80" />
        </motion.div>
      </div>

      {/* Intro Text - Monospace Block */}
      <motion.div 
        className="max-w-md relative z-10"
        variants={fadeInUp}
      >
        <div className="flex items-start gap-4">
           <motion.div
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 0.8, duration: 0.5 }}
           >
              <Icons.Wave className="w-8 h-8 shrink-0 mt-1" color="#0091FF" />
           </motion.div>
           <p className="font-mono text-sm text-[#bbb] leading-relaxed uppercase tracking-wide">
             <span className="text-[#FF6B00]">{`>>>`}</span> STRATEGY MEETS EXECUTION.
             <br/>
             TURNING COMPLEX PROBLEMS INTO
             SIMPLE, ELEGANT PRODUCTS.
           </p>
        </div>
      </motion.div>

      {/* Key Stats - Segmented Style */}
      <motion.div 
        className="grid grid-cols-3 gap-6 mt-auto mb-8 border-t border-[#222] pt-6"
        variants={staggerContainer}
      >
         <motion.div className="flex flex-col gap-1" variants={fadeInUp}>
            <LCDText text="12" size="xl" color="orange" />
            <LCDText text="YRS EXP" size="xs" color="white" />
         </motion.div>
         <motion.div className="flex flex-col gap-1" variants={fadeInUp}>
            <LCDText text="11" size="xl" color="orange" />
            <LCDText text="PROJECTS" size="xs" color="white" />
         </motion.div>
         <motion.div className="flex flex-col gap-1" variants={fadeInUp}>
            <LCDText text="08" size="xl" color="orange" />
            <LCDText text="SHIPPED" size="xs" color="white" />
         </motion.div>
      </motion.div>
      
      {/* Footer Instruction */}
      <motion.div className="mt-auto" variants={fadeInUp}>
         <Link href="/projects" className="group flex items-center gap-2">
            <div className="px-2 py-1 border border-[#333] group-hover:border-[#FF6B00] transition-colors">
               <LCDText text="PRESS B" size="xs" color="white" />
            </div>
            <LCDText text="TO VIEW PATTERNS" size="xs" color="white" className="opacity-50" />
         </Link>
      </motion.div>
    </motion.div>
  );
}