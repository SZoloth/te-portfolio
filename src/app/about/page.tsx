'use client';

import { LCDText } from '@/components/ko-ii/LCD';
import { Metadata } from 'next';

const SPECS = {
  model: 'SAM ZOLOTH',
  version: '2025.01',
  type: 'PROD STRATEGIST',
  location: 'DENVER, CO',
  experience: {
    years: 9,
    projects: 13,
    shipped: 11,
  },
  career: [
    { role: 'SR PROD MGR', company: 'STELLAR ELEMENTS', period: '22-PRES' },
    { role: 'GROWTH PM', company: 'ADK GROUP', period: '17-21' },
    { role: 'PRODUCT MGR', company: 'WELLIST', period: '14-17' },
  ],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 h-full">
      {/* Header - Product Label Style */}
      <div className="flex items-start justify-between border-b border-[#333] pb-4">
          <div className="flex flex-col gap-1">
            <LCDText text="MODEL" size="xs" color="white" className="opacity-50" />
            <LCDText text={SPECS.model} size="lg" color="orange" />
            <LCDText text={`${SPECS.type} v${SPECS.version}`} size="xs" color="white" className="mt-1" />
          </div>
          <div className="text-right flex flex-col gap-1">
            <LCDText text="LOC" size="xs" color="white" className="opacity-50" />
            <LCDText text={SPECS.location} size="md" color="white" />
          </div>
      </div>

      {/* Experience Meters - simplified */}
      <div className="flex justify-between gap-4">
          <div className="flex flex-col items-center gap-1">
            <LCDText text={String(SPECS.experience.years).padStart(2, '0')} size="xl" color="orange" />
            <LCDText text="YEARS" size="xs" color="white" className="opacity-60" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <LCDText text={String(SPECS.experience.projects).padStart(2, '0')} size="xl" color="orange" />
            <LCDText text="PROJ" size="xs" color="white" className="opacity-60" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <LCDText text={String(SPECS.experience.shipped).padStart(2, '0')} size="xl" color="orange" />
            <LCDText text="SHIP" size="xs" color="white" className="opacity-60" />
          </div>
      </div>

      {/* Career Timeline */}
      <div className="flex flex-col gap-4 mt-4">
        <LCDText text="TIMELINE" size="xs" color="white" className="opacity-50 mb-2" />
        {SPECS.career.map((job, index) => (
            <div key={job.company} className="flex flex-col gap-1 border-b border-[#222] pb-2 last:border-0">
              <div className="flex justify-between items-baseline">
                <div className="flex gap-2">
                  <LCDText text={String(index + 1).padStart(2, '0')} size="xs" color="orange" />
                  <LCDText text={job.role} size="sm" color="white" />
                </div>
                <LCDText text={job.period} size="xs" color="white" className="opacity-50" />
              </div>
              <div className="pl-6">
                 <LCDText text={`@ ${job.company}`} size="xs" color="white" className="opacity-70" />
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}