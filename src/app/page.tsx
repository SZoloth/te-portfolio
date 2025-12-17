'use client';

import { MetricsDisplay } from "@/components/MetricsDisplay";
import { RecordingIndicator } from "@/components/RecordingIndicator";
import { CASE_STUDIES, getActiveCaseStudies } from "@/lib/case-studies";
import Link from "next/link";

const METRICS = [
  { label: "Years XP", value: 12, color: "orange" as const },
  { label: "Projects", value: 11, color: "blue" as const },
  { label: "Products Shipped", value: 8, color: "green" as const },
];

export default function Home() {
  const activeProjects = getActiveCaseStudies();

  return (
    <div className="p-8 lg:p-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-mono font-bold mb-4 text-white">
          Product Builder
        </h1>
        <p className="text-[var(--te-light-gray)] text-lg font-mono max-w-2xl leading-relaxed">
          I turn complex problems into simple, elegant products.
          Strategy meets execution meets craft.
        </p>
      </section>

      {/* Metrics Display */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)]">
            Career Metrics
          </h2>
          <div className="flex-1 h-px bg-[var(--te-mid-gray)]" />
        </div>
        <MetricsDisplay metrics={METRICS} animateOnMount />
      </section>

      {/* Active Projects */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <RecordingIndicator label="CURRENTLY WORKING ON" />
          <div className="flex-1 h-px bg-[var(--te-mid-gray)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group te-panel p-4 hover:border-[var(--te-orange)] transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <span className={`text-xs font-mono px-2 py-0.5 bg-[var(--te-${project.color})] text-black`}>
                  {project.domain}
                </span>
                <span className="text-xs font-mono text-[var(--te-light-gray)]">
                  {project.year}
                </span>
              </div>
              <h3 className="text-white font-mono font-medium mb-2 group-hover:text-[var(--te-orange)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--te-light-gray)] font-mono line-clamp-2">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links to Projects */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)]">
            All Projects
          </h2>
          <div className="flex-1 h-px bg-[var(--te-mid-gray)]" />
          <Link
            href="/projects"
            className="text-xs font-mono text-[var(--te-orange)] hover:underline"
          >
            View Grid →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {CASE_STUDIES.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="px-3 py-1.5 border border-[var(--te-mid-gray)] text-xs font-mono text-[var(--te-light-gray)] hover:border-[var(--te-orange)] hover:text-white transition-colors"
            >
              <span className="text-[var(--te-orange)] mr-1">{String(index + 1).padStart(2, '0')}</span>
              {project.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
