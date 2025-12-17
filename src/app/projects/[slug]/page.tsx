import { CASE_STUDIES, getCaseStudy } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Sam Zoloth`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  // Find adjacent projects for navigation
  const currentIndex = CASE_STUDIES.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : null;
  const nextProject = currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : null;

  return (
    <div className="p-8 lg:p-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-8 text-xs font-mono text-[var(--te-light-gray)]">
        <Link href="/projects" className="hover:text-[var(--te-orange)]">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">{project.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-mono px-2 py-1 bg-[var(--te-${project.color})] text-black`}>
            {project.domain}
          </span>
          <span className="text-xs font-mono text-[var(--te-light-gray)]">
            {project.year}
          </span>
          {project.status === 'active' && (
            <span className="flex items-center gap-1 text-xs font-mono text-[var(--te-red)]">
              <span className="w-2 h-2 rounded-full bg-[var(--te-red)] animate-pulse" />
              Active
            </span>
          )}
        </div>

        <h1 className="text-4xl font-mono font-bold mb-4 text-white">
          {project.title}
        </h1>

        <p className="text-[var(--te-light-gray)] text-lg font-mono leading-relaxed">
          {project.summary}
        </p>
      </header>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-4">
            Key Metrics
          </h2>
          <div className="flex flex-wrap gap-6">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="te-panel p-4">
                <div className="text-2xl font-mono font-bold text-[var(--te-orange)]">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-[var(--te-light-gray)] uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Role & Details */}
      <section className="mb-12">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-2">
              Role
            </h3>
            <p className="text-white font-mono">{project.role}</p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono border border-[var(--te-mid-gray)] text-[var(--te-light-gray)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="mb-12 te-panel p-8">
        <p className="text-[var(--te-light-gray)] font-mono text-center">
          Detailed case study content coming soon.
          <br />
          <span className="text-xs opacity-60">
            This will include problem statement, approach, process, and outcomes.
          </span>
        </p>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-[var(--te-mid-gray)]">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex items-center gap-2 text-sm font-mono text-[var(--te-light-gray)] hover:text-white"
          >
            <span className="text-[var(--te-orange)]">←</span>
            <span className="group-hover:text-[var(--te-orange)]">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/projects"
          className="text-xs font-mono text-[var(--te-light-gray)] hover:text-[var(--te-orange)]"
        >
          All Projects
        </Link>

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center gap-2 text-sm font-mono text-[var(--te-light-gray)] hover:text-white"
          >
            <span className="group-hover:text-[var(--te-orange)]">
              {nextProject.title}
            </span>
            <span className="text-[var(--te-orange)]">→</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
