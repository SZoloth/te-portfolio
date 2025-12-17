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
      className="grid gap-1"
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
              className="aspect-square bg-[var(--te-bg-panel)] border border-[var(--te-mid-gray)] opacity-30"
            />
          );
        }

        const accentColor = COLOR_MAP[project.color] || COLOR_MAP.orange;

        return (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group relative aspect-square bg-[var(--te-bg-panel)] border border-[var(--te-mid-gray)] hover:border-[var(--te-orange)] transition-all overflow-hidden"
          >
            {/* Step number indicator */}
            <div
              className="absolute top-2 left-2 text-xs font-mono"
              style={{ color: accentColor }}
            >
              {project.id}
            </div>

            {/* Status indicator */}
            {project.status === 'active' && (
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--te-red)] animate-pulse" />
            )}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-3">
              <div
                className="w-full h-1 mb-2 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: accentColor }}
              />
              <h3 className="text-white text-sm font-mono font-medium line-clamp-2 group-hover:text-[var(--te-orange)] transition-colors">
                {project.title}
              </h3>
              <span className="text-[var(--te-light-gray)] text-xs font-mono mt-1">
                {project.domain}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[var(--te-orange)] opacity-0 group-hover:opacity-5 transition-opacity" />
          </Link>
        );
      })}
    </div>
  );
};

export default SequencerGrid;
