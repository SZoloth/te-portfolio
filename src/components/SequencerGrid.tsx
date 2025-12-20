'use client';

import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/lib/case-studies';

interface SequencerGridProps {
  projects: CaseStudy[];
  columns?: number;
}

const COLOR_MAP: Record<string, string> = {
  orange: 'var(--te-orange)',
  blue: 'var(--te-blue)',
  red: 'var(--te-red)',
  green: 'var(--te-green)',
  white: 'var(--te-white)',
};

/**
 * SequencerGrid - TE-style sequencer grid for project display
 * Mimics the step sequencer aesthetic of OP-1/TP-7
 */
export const SequencerGrid: React.FC<SequencerGridProps> = ({
  projects,
  columns = 4,
}) => {
  // Pad to fill grid (make it a nice multiple)
  const gridSize = Math.ceil(projects.length / columns) * columns;
  const paddedProjects = [...projects];
  while (paddedProjects.length < gridSize) {
    paddedProjects.push(null as unknown as CaseStudy); // Empty cells
  }

  return (
    <div
      className="grid gap-2 p-1 bg-[#1a1a1a] rounded border border-[#333]"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {paddedProjects.map((project, index) => {
        if (!project) {
          // Empty cell
          return (
            <div
              key={`empty-${index}`}
              className="aspect-square bg-[#222] border border-[#333] flex items-center justify-center"
            >
               <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
            </div>
          );
        }

        const accentColor = COLOR_MAP[project.color] || COLOR_MAP.orange;

        return (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group relative aspect-square bg-[#252525] border-t border-l border-[#3a3a3a] border-b border-r border-[#1a1a1a] hover:bg-[#2a2a2a] transition-all overflow-hidden active:translate-y-[1px] active:border-none"
          >
            {/* LED Indicator */}
            <div className="absolute top-2 right-2">
                 <div className={`w-2 h-2 rounded-full transition-all duration-300 ${project.status === 'active' ? 'bg-[var(--te-red)] shadow-[0_0_6px_var(--te-red)] animate-pulse' : 'bg-[#111]'}`} />
            </div>

            {/* Step number label (Silkscreen style) */}
            <div
              className="absolute top-2 left-2 text-[10px] font-bold font-mono text-[#555] group-hover:text-[#777]"
            >
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-3">
              <div
                className="w-full h-0.5 mb-2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
              />
              <h3 className="text-gray-300 text-xs font-mono font-medium line-clamp-2 leading-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SequencerGrid;
