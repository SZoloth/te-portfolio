'use client';

import { CASE_STUDIES } from '@/lib/case-studies';
import { LCDText } from '@/components/ko-ii/LCD';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 }
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 flex justify-between items-end border-b border-[#333] pb-2">
         <LCDText text="PATTERNS" size="lg" color="white" />
         <LCDText text={`TOTAL: ${CASE_STUDIES.length}`} size="xs" color="white" className="opacity-50" />
      </div>

      <motion.div 
        className="flex flex-col gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {CASE_STUDIES.map((project, index) => (
          <motion.div variants={item} key={project.id}>
            <Link 
              href={`/projects/${project.slug}`}
              className="group flex items-center gap-4 p-2 border border-transparent hover:border-[#FF6B00] hover:bg-[#111] transition-all cursor-pointer"
            >
              {/* Index Number */}
              <div className="w-8">
                 <LCDText text={String(index + 1).padStart(2, '0')} size="md" color="orange" />
              </div>

              {/* Project Title */}
              <div className="flex-1">
                 <LCDText text={project.title} size="md" color="white" className="group-hover:text-[#FF6B00] transition-colors" />
                 <div className="flex gap-2 mt-1">
                   <span className="text-[10px] text-[#777] font-mono uppercase tracking-wider group-hover:text-[#999]">
                     {project.domain}
                   </span>
                   <span className="text-[10px] text-[#555] font-mono uppercase">
                     {project.status}
                   </span>
                 </div>
              </div>

              {/* Arrow/Enter Icon */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                 <LCDText text=">" size="md" color="orange" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}