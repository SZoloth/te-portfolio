export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  domain: string;
  role: string;
  year: string;
  summary: string;
  color: 'orange' | 'blue' | 'red' | 'green' | 'white';
  status: 'shipped' | 'active' | 'archived';
  metrics?: {
    label: string;
    value: string;
  }[];
  tags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '01',
    title: 'AI Annotation Tool',
    slug: 'ai-annotation',
    domain: 'Enterprise AI',
    role: 'Product Strategy',
    year: '2024',
    summary: 'Led product strategy for AI-powered content annotation platform serving enterprise clients.',
    color: 'orange',
    status: 'active',
    metrics: [
      { label: 'Users', value: '500+' },
      { label: 'Accuracy', value: '94%' },
    ],
    tags: ['AI/ML', 'Enterprise', 'B2B'],
  },
  {
    id: '02',
    title: 'Email Performance Platform',
    slug: 'email-performance',
    domain: 'MarTech',
    role: 'Senior Product Manager',
    year: '2023',
    summary: 'Built analytics platform helping marketing teams optimize email campaign performance.',
    color: 'blue',
    status: 'shipped',
    metrics: [
      { label: 'Open Rate', value: '+18%' },
      { label: 'CTR', value: '+24%' },
    ],
    tags: ['Analytics', 'Marketing', 'SaaS'],
  },
  {
    id: '03',
    title: 'Courier Platform',
    slug: 'courier-platform',
    domain: 'Logistics',
    role: 'Product Lead',
    year: '2023',
    summary: 'End-to-end delivery management platform for last-mile logistics operations.',
    color: 'green',
    status: 'shipped',
    metrics: [
      { label: 'Deliveries', value: '50K+' },
      { label: 'SLA', value: '99.2%' },
    ],
    tags: ['Logistics', 'Mobile', 'Operations'],
  },
  {
    id: '04',
    title: 'Digital Work Area',
    slug: 'dwa',
    domain: 'Enterprise Tools',
    role: 'Strategy Lead',
    year: '2024',
    summary: 'Next-gen workspace platform for creative collaboration in entertainment industry.',
    color: 'orange',
    status: 'active',
    metrics: [
      { label: 'Teams', value: '12' },
      { label: 'Assets', value: '1M+' },
    ],
    tags: ['Enterprise', 'Collaboration', 'Media'],
  },
  {
    id: '05',
    title: 'Pager - News Aggregator',
    slug: 'pager',
    domain: 'Consumer',
    role: 'Founder',
    year: '2022',
    summary: 'Personalized news aggregation with AI-powered curation and summarization.',
    color: 'red',
    status: 'archived',
    metrics: [
      { label: 'DAU', value: '2.5K' },
      { label: 'Sources', value: '100+' },
    ],
    tags: ['Consumer', 'AI', 'News'],
  },
  {
    id: '06',
    title: 'Neon - Spatial Interface',
    slug: 'neon',
    domain: 'XR/Spatial',
    role: 'Design Lead',
    year: '2023',
    summary: 'Experimental spatial computing interface for 3D data visualization.',
    color: 'blue',
    status: 'archived',
    metrics: [
      { label: 'Prototype', value: 'v3' },
    ],
    tags: ['XR', 'Spatial', 'Experimental'],
  },
  {
    id: '07',
    title: 'Voice AI POC',
    slug: 'voice-ai',
    domain: 'AI/Voice',
    role: 'Technical PM',
    year: '2024',
    summary: 'Voice-first AI assistant proof of concept for customer service automation.',
    color: 'green',
    status: 'shipped',
    metrics: [
      { label: 'Resolution', value: '78%' },
      { label: 'CSAT', value: '4.2' },
    ],
    tags: ['AI', 'Voice', 'Customer Service'],
  },
  {
    id: '08',
    title: 'Unwrapped - iOS App',
    slug: 'unwrapped',
    domain: 'Consumer iOS',
    role: 'Solo Developer',
    year: '2024',
    summary: 'Personal year-in-review iOS app with beautiful data visualization.',
    color: 'orange',
    status: 'shipped',
    metrics: [
      { label: 'Downloads', value: '1.2K' },
    ],
    tags: ['iOS', 'Swift', 'Consumer'],
  },
  {
    id: '09',
    title: 'Previz - Search Proto',
    slug: 'previz',
    domain: 'Search/AI',
    role: 'Product Designer',
    year: '2024',
    summary: 'Experimental search interface prototype exploring AI-augmented discovery.',
    color: 'blue',
    status: 'active',
    metrics: [
      { label: 'Iterations', value: '8' },
    ],
    tags: ['Search', 'AI', 'Prototype'],
  },
  {
    id: '10',
    title: 'News Aggregator',
    slug: 'news-agg',
    domain: 'Consumer',
    role: 'Product Manager',
    year: '2021',
    summary: 'RSS-based news aggregator with ML-powered categorization.',
    color: 'white',
    status: 'archived',
    tags: ['Consumer', 'ML', 'RSS'],
  },
  {
    id: '11',
    title: 'Financial Data Stream',
    slug: 'fin-data',
    domain: 'FinTech',
    role: 'Technical PM',
    year: '2022',
    summary: 'Real-time streaming data platform for financial market visualization.',
    color: 'green',
    status: 'shipped',
    metrics: [
      { label: 'Latency', value: '<50ms' },
      { label: 'Feeds', value: '25' },
    ],
    tags: ['FinTech', 'Data', 'Real-time'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}

export function getActiveCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.status === 'active');
}

export function getCaseStudiesByDomain(domain: string): CaseStudy[] {
  return CASE_STUDIES.filter((cs) => cs.domain === domain);
}
