import { SevenSegment } from '@/components/te-design-system/SevenSegment';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Sam Zoloth',
  description: 'Product Manager specifications and background.',
};

// Specs data - styled like TE product specifications
const SPECS = {
  model: 'SAM ZOLOTH',
  version: '2024.12',
  type: 'Product Manager',
  location: 'Arizona, USA',
  experience: {
    years: 12,
    products: 11,
    shipped: 8,
  },
  domains: [
    'Enterprise SaaS',
    'AI/ML Products',
    'Consumer Apps',
    'Developer Tools',
    'FinTech',
    'Media & Entertainment',
  ],
  skills: {
    strategy: ['Product Strategy', 'Market Analysis', 'Pricing', 'Go-to-Market'],
    discovery: ['User Research', 'JTBD Framework', 'Opportunity Mapping', 'Prototyping'],
    execution: ['Agile/Scrum', 'Roadmapping', 'Stakeholder Management', 'Data Analysis'],
    technical: ['SQL', 'Python', 'TypeScript', 'Swift', 'Figma'],
  },
  education: [
    { degree: 'MBA', institution: 'Arizona State University', year: '2018' },
    { degree: 'BS Computer Science', institution: 'University of Colorado', year: '2012' },
  ],
  certifications: ['AWS Cloud Practitioner', 'Pragmatic Marketing Certified'],
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
            <SevenSegment value={SPECS.experience.products} digits={2} color="blue" size="lg" />
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

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-4">
          Education
        </h2>
        <div className="space-y-4">
          {SPECS.education.map((edu) => (
            <div key={edu.degree} className="flex justify-between items-baseline">
              <div>
                <span className="text-white font-mono">{edu.degree}</span>
                <span className="text-[var(--te-light-gray)] font-mono mx-2">—</span>
                <span className="text-[var(--te-light-gray)] font-mono text-sm">
                  {edu.institution}
                </span>
              </div>
              <span className="text-xs font-mono text-[var(--te-orange)]">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--te-light-gray)] mb-4">
          Certifications
        </h2>
        <div className="flex flex-wrap gap-2">
          {SPECS.certifications.map((cert) => (
            <span
              key={cert}
              className="px-3 py-1.5 text-xs font-mono bg-[var(--te-bg-panel)] border border-[var(--te-mid-gray)] text-white"
            >
              {cert}
            </span>
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
            href="mailto:sam@samzoloth.com"
            className="px-6 py-2 text-sm font-mono bg-[var(--te-orange)] text-black hover:bg-[var(--te-yellow)] transition-colors"
          >
            Contact
          </a>
          <a
            href="https://linkedin.com/in/samzoloth"
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
