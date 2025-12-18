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
        <h1 className="h1 mb-4">
          Product Builder
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-2xl leading-relaxed">
          I turn complex problems into simple, elegant products.
          Strategy meets execution meets craft.
        </p>
      </section>

      {/* Metrics Display */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="h3 text-[var(--muted)]">
            Career Metrics
          </h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>
        <MetricsDisplay metrics={METRICS} animateOnMount />
      </section>

      {/* Active Projects */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <RecordingIndicator label="CURRENTLY WORKING ON" />
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card group te-panel p-4 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <span className={`text-xs px-2 py-0.5 bg-[var(--accent)] text-[var(--background)]`}>
                  {project.domain}
                </span>
                <span className="text-xs text-[var(--muted)]">
                  {project.year}
                </span>
              </div>
              <h3 className="text-[var(--foreground)] font-medium mb-2 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)] line-clamp-2">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links to Projects */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="h3 text-[var(--muted)]">
            All Projects
          </h2>
          <div className="flex-1 h-px bg-[var(--border)]" />
          <Link
            href="/projects"
            className="text-xs text-[var(--accent)] hover:underline"
          >
            View Grid →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {CASE_STUDIES.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="px-3 py-1.5 border border-[var(--border)] text-xs text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-colors"
            >
              <span className="text-[var(--accent)] mr-1">{String(index + 1).padStart(2, '0')}</span>
              {project.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
