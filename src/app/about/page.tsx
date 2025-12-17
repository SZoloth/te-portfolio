import { SevenSegment } from '@/components/te-design-system/SevenSegment';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Sam Zoloth',
  description: 'Product Strategist specifications and background.',
};

// Specs data - styled like TE product specifications
const SPECS = {
  model: 'SAM ZOLOTH',
  version: '2025.01',
  type: 'Product Strategist',
  location: 'Denver, CO',
  experience: {
    years: 9,
    projects: 13,
    shipped: 11,
  },
  domains: [
    'Enterprise SaaS',
    'Logistics & 3PL',
    'Healthcare',
    'EdTech',
    'Entertainment',
    'Consumer Apps',
  ],
  skills: {
    strategy: ['Product Strategy', 'Market Analysis', 'ROI Modeling', 'Go-to-Market'],
    discovery: ['User Research', 'JTBD Framework', 'Continuous Discovery', 'Service Design'],
    execution: ['Stakeholder Alignment', 'Roadmapping', 'Cross-Functional Leadership', 'Metrics Design'],
    methods: ['AI-Assisted Research', 'Experimentation', 'Behavioral Segmentation', 'Executive Storytelling'],
  },
  career: [
    { role: 'Senior Product Manager', company: 'Stellar Elements', period: '2022-Present' },
    { role: 'Growth Product Manager', company: 'ADK Group', period: '2017-2021' },
    { role: 'Product Manager', company: 'Wellist', period: '2014-2017' },
  ],
  highlights: [
    '100x organic traffic growth at Wasabi',
    '$4.29M projected value for Comcast',
    '65% CES improvement for Steamship Authority',
    'VP-level executive alignment at DreamWorks',
  ],
};

export default function AboutPage() {
  return (
    <div className="p-8 lg:p-12 max-w-4xl">
      {/* Header - Product Label Style */}
      <header className="mb-12 te-panel p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-mono text-[var(--te-light-gray)] mb-1">
              MODEL
            </div>
            <h1 className="text-3xl font-mono font-bold text-[var(--te-orange)]">
              {SPECS.model}
            </h1>
            <div className="text-sm font-mono text-[var(--te-light-gray)] mt-1">
              {SPECS.type} v{SPECS.version}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono text-[var(--te-light-gray)] mb-1">
              LOCATION
            </div>
            <div className="text-sm font-mono text-white">
              {SPECS.location}
            </div>
          </div>
        </div>
      </header>

      {/* Bio Statement */}
      <section className="mb-12 te-panel p-6">
        <p className="text-[var(--te-light-gray)] font-mono leading-relaxed">
          Product leader who turns ambiguity into clear strategy and ships measurable outcomes.
          Deep expertise in user research, systematic experimentation, and pragmatic AI that
          compresses weeks to days. Aligns executives and teams around shared metrics for
          consistent, material impact across industries.
        </p>
      </section>

      {/* Experience Meters */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-6">
          Experience
        </h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <SevenSegment value={SPECS.experience.years} digits={2} color="orange" size="lg" />
            <span className="text-xs font-mono text-[var(--te-light-gray)] mt-2 uppercase">
              Years
            </span>
          </div>
          <div className="flex flex-col items-center">
            <SevenSegment value={SPECS.experience.projects} digits={2} color="blue" size="lg" />
            <span className="text-xs font-mono text-[var(--te-light-gray)] mt-2 uppercase">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-center">
            <SevenSegment value={SPECS.experience.shipped} digits={2} color="green" size="lg" />
            <span className="text-xs font-mono text-[var(--te-light-gray)] mt-2 uppercase">
              Shipped
            </span>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-4">
          Career
        </h2>
        <div className="space-y-4">
          {SPECS.career.map((job, index) => (
            <div key={job.company} className="flex justify-between items-baseline te-panel p-4">
              <div>
                <span className="text-[var(--te-orange)] font-mono mr-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-white font-mono">{job.role}</span>
                <span className="text-[var(--te-mid-gray)] font-mono mx-2">@</span>
                <span className="text-[var(--te-light-gray)] font-mono text-sm">
                  {job.company}
                </span>
              </div>
              <span className="text-xs font-mono text-[var(--te-mid-gray)]">
                {job.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Domains */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-4">
          Domains
        </h2>
        <div className="flex flex-wrap gap-2">
          {SPECS.domains.map((domain, index) => (
            <span
              key={domain}
              className="px-3 py-1.5 text-xs font-mono border border-[var(--te-mid-gray)] text-white"
            >
              <span className="text-[var(--te-orange)] mr-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              {domain}
            </span>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(SPECS.skills).map(([category, skills]) => (
            <div key={category} className="te-panel p-4">
              <h3 className="text-xs font-mono uppercase text-[var(--te-orange)] mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-[var(--te-light-gray)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-4">
          Highlights
        </h2>
        <div className="space-y-2">
          {SPECS.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-[var(--te-orange)] font-mono text-xs">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-white font-mono text-sm">{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="te-panel p-6 text-center">
        <p className="text-[var(--te-light-gray)] font-mono mb-4">
          Interested in working together?
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:smzoloth@gmail.com"
            className="px-6 py-2 text-sm font-mono bg-[var(--te-orange)] text-black hover:bg-[var(--te-yellow)] transition-colors"
          >
            Contact
          </a>
          <a
            href="https://linkedin.com/in/samuelzoloth"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm font-mono border border-[var(--te-mid-gray)] text-white hover:border-[var(--te-orange)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
