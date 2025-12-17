'use client';

import { SequencerGrid } from '@/components/SequencerGrid';
import { CASE_STUDIES } from '@/lib/case-studies';
import { useState } from 'react';

type FilterStatus = 'all' | 'active' | 'shipped' | 'archived';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filteredProjects = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.status === filter);

  const statusCounts = {
    all: CASE_STUDIES.length,
    active: CASE_STUDIES.filter((p) => p.status === 'active').length,
    shipped: CASE_STUDIES.filter((p) => p.status === 'shipped').length,
    archived: CASE_STUDIES.filter((p) => p.status === 'archived').length,
  };

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-mono font-bold mb-2 text-white">
          Projects
        </h1>
        <p className="text-[var(--te-light-gray)] font-mono">
          Sequencer view of all case studies. Click to explore.
        </p>
      </section>

      {/* Filter Controls */}
      <section className="mb-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[var(--te-light-gray)] mr-2">
            FILTER:
          </span>
          {(['all', 'active', 'shipped', 'archived'] as FilterStatus[]).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`
                px-3 py-1 text-xs font-mono uppercase border transition-all
                ${filter === status
                  ? 'bg-[var(--te-orange)] text-black border-[var(--te-orange)]'
                  : 'bg-transparent text-[var(--te-light-gray)] border-[var(--te-mid-gray)] hover:border-[var(--te-orange)]'
                }
              `}
            >
              {status}
              <span className="ml-1 opacity-60">({statusCounts[status]})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Sequencer Grid */}
      <section>
        <SequencerGrid projects={filteredProjects} columns={4} />
      </section>

      {/* Legend */}
      <section className="mt-8 pt-8 border-t border-[var(--te-mid-gray)]">
        <div className="flex items-center gap-6 text-xs font-mono text-[var(--te-light-gray)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--te-red)] animate-pulse" />
            <span>Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-[var(--te-orange)]" />
            <span>Enterprise AI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-[var(--te-blue)]" />
            <span>MarTech / Search</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-[var(--te-green)]" />
            <span>Logistics / FinTech</span>
          </div>
        </div>
      </section>
    </div>
  );
}
