export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  domain: string;
  role: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string[];
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
    title: 'DreamWorks Animation',
    slug: 'dreamworks',
    client: 'DreamWorks Animation',
    domain: 'Entertainment',
    role: 'Research Lead',
    year: '2025',
    summary: 'Cross-department strategic research and executive alignment for Lasso Digital Backlot platform adoption.',
    challenge: 'Fragmented vertical org structure made cross-department platform opportunities hard to see and fund. Needed clear executive alignment and credible ROI story.',
    approach: [
      'Ran 15+ stakeholder interviews across Story, FLO, Previz, Legal, DGM, Analytics',
      'Applied continuous discovery + JTBD to separate behaviors from feature preferences',
      'Built executive alignment for North Star metrics; secured VP Technology support',
      'Designed LookDev ROI benchmark comparing Lasso vs ShotGrid on core tasks',
    ],
    color: 'orange',
    status: 'active',
    metrics: [
      { label: 'Depts', value: '6+' },
      { label: 'Docs', value: '246' },
      { label: 'VP', value: '✓' },
    ],
    tags: ['Enterprise', 'Research', 'Executive Alignment', 'JTBD'],
  },
  {
    id: '02',
    title: 'Wasabi Cloud Storage',
    slug: 'wasabi',
    client: 'Wasabi Technologies',
    domain: 'B2B SaaS',
    role: 'Growth Strategy Lead',
    year: '2018',
    summary: '100x organic traffic growth and 63% conversion improvement for enterprise cloud storage provider.',
    challenge: 'Pre-launch cloud storage startup needed sustainable, non-paid acquisition channels and systematic conversion optimization to compete with enterprise incumbents.',
    approach: [
      'Built comprehensive SEO strategy from ground zero for B2B SaaS market',
      'Established systematic A/B testing methodology with statistical rigor',
      'Created full-day training curriculum for internal team capability transfer',
      'Designed analytics infrastructure for ongoing experimentation culture',
    ],
    color: 'green',
    status: 'shipped',
    metrics: [
      { label: 'Traffic', value: '100x' },
      { label: 'CVR', value: '+63%' },
      { label: 'Years', value: '4+' },
    ],
    tags: ['Growth', 'SEO', 'CRO', 'B2B SaaS'],
  },
  {
    id: '03',
    title: 'Comcast Service Optimization',
    slug: 'comcast',
    client: 'Comcast/Xfinity',
    domain: 'Telecommunications',
    role: 'Financial Modeling',
    year: '2022',
    summary: '$4.29M projected annual value through service optimization ROI model.',
    challenge: 'Comcast needed quantified ROI model for customer service optimization initiatives to support major operational transformation investment.',
    approach: [
      'Built comprehensive 5-year financial model under severe data constraints',
      'Combined limited client inputs with industry benchmarks for validation',
      'Created compelling business case presentation for executive stakeholders',
      'Delivered complete analysis in 1-week sprint timeline',
    ],
    color: 'blue',
    status: 'shipped',
    metrics: [
      { label: 'Value', value: '$4.29M' },
      { label: 'Cost', value: '-25%' },
      { label: 'Sprint', value: '1 wk' },
    ],
    tags: ['ROI Analysis', 'Executive', 'Business Case', 'Telco'],
  },
  {
    id: '04',
    title: 'Echo Global Logistics',
    slug: 'echo-logistics',
    client: 'Echo Global Logistics',
    domain: 'Logistics',
    role: 'Product Strategy',
    year: '2023',
    summary: 'TMS modernization strategy for large 3PL freight brokerage with fragmented systems.',
    challenge: 'Large 3PL freight brokerage operated fragmented TMS from acquisitions, needed modernization strategy for broker-facing systems.',
    approach: [
      '6-month cross-functional engagement with designers, product, external consultant',
      'Conducted 15+ TMS competitor analysis with feature comparison',
      'Combined broker interviews with adjacent domain analysis',
      'Focused on mobile workflows and real-time notifications for impact',
    ],
    color: 'orange',
    status: 'shipped',
    metrics: [
      { label: 'TMS', value: '15+' },
      { label: 'Months', value: '6' },
      { label: 'Teams', value: '4' },
    ],
    tags: ['Logistics', 'Marketplace', 'TMS', 'Service Blueprint'],
  },
  {
    id: '05',
    title: 'GoHunt Outdoor App',
    slug: 'gohunt',
    client: 'GoHunt',
    domain: 'Consumer',
    role: 'Research Strategy',
    year: '2024',
    summary: 'Era 3 AI-assisted research methodology delivering positioning and growth strategy in 2 weeks.',
    challenge: 'Hunting app struggling with growth despite unique value proposition, losing ground to competitors with mapping features.',
    approach: [
      'Built custom forum scraper using StratGPT + Repl.it for community analysis',
      'Combined Reddit analysis, surveys, persona chatbots, and interviews',
      'Created multi-channel research integration with AI-assisted categorization',
      'Developed retention-doubling scenarios with transformative potential',
    ],
    color: 'green',
    status: 'shipped',
    metrics: [
      { label: 'Time', value: '2 wks' },
      { label: 'Sources', value: '5+' },
      { label: 'AI', value: '✓' },
    ],
    tags: ['Consumer', 'AI Research', 'Growth Strategy', 'Positioning'],
  },
  {
    id: '06',
    title: 'Steamship Authority',
    slug: 'steamship',
    client: 'Steamship Authority',
    domain: 'Transportation',
    role: 'Service Design Lead',
    year: '2023',
    summary: '65% Customer Effort Score improvement for Martha\'s Vineyard & Nantucket ferry booking.',
    challenge: 'Ferry booking system caused customer frustration with confusing flows, pricing complexity, poor mobile support, and overwhelmed call centers.',
    approach: [
      'Conducted research across diverse stakeholders (vacationers, truckers, emergency)',
      'Applied cost of delay analysis for evidence-based prioritization',
      'Designed mobile-first booking experience with API planning',
      'Created holistic service design addressing operational constraints',
    ],
    color: 'blue',
    status: 'shipped',
    metrics: [
      { label: 'CES', value: '+65%' },
      { label: 'Mobile', value: '✓' },
      { label: 'API', value: '✓' },
    ],
    tags: ['Service Design', 'UX', 'Transportation', 'Mobile'],
  },
  {
    id: '07',
    title: 'Cengage AI Education',
    slug: 'cengage',
    client: 'Cengage Learning/Gale',
    domain: 'EdTech',
    role: 'Strategy Lead',
    year: '2024',
    summary: 'Strategic reframe from digital textbooks to AI-powered experiential classroom platform.',
    challenge: 'Cengage initially requested digital textbook library but discovery revealed opportunity for comprehensive AI-powered classroom platform.',
    approach: [
      'Interviewed teachers, principals, curriculum directors across grade levels',
      'Identified teacher control boundaries vs. AI assistance areas',
      'Benchmarked against EdTech players and AI-first entrants',
      'Positioned solution as teacher-empowered AI tool, not replacement',
    ],
    color: 'orange',
    status: 'shipped',
    metrics: [
      { label: 'Pivot', value: '✓' },
      { label: 'AI', value: '✓' },
      { label: 'K-12', value: '✓' },
    ],
    tags: ['EdTech', 'AI', 'Strategy', 'Platform'],
  },
  {
    id: '08',
    title: 'National Grid',
    slug: 'national-grid',
    client: 'National Grid',
    domain: 'Energy',
    role: 'Research Lead',
    year: '2023',
    summary: 'Behavioral motivation research and customer segmentation for energy conservation initiatives.',
    challenge: 'National Grid needed customer behavioral segmentation to drive effective energy conservation and engagement initiatives.',
    approach: [
      'Conducted comprehensive market research on customer motivational states',
      'Applied Era 2 methodology with app store/social media review scraping',
      'Integrated AI analysis for data categorization and insight extraction',
      'Created framework connecting behavioral profiles to experience design',
    ],
    color: 'green',
    status: 'shipped',
    metrics: [
      { label: 'Segments', value: '4' },
      { label: 'AI', value: '✓' },
      { label: 'JTBD', value: '✓' },
    ],
    tags: ['Energy', 'Behavioral Research', 'Segmentation', 'AI'],
  },
  {
    id: '09',
    title: 'HairCode Beauty Tech',
    slug: 'haircode',
    client: 'HairCode',
    domain: 'Beauty Tech',
    role: 'Strategy Lead',
    year: '2023',
    summary: 'Beauty tech platform positioning with healthcare integration expansion strategy.',
    challenge: 'HairCode needed positioning strategy for AI-powered hair diagnostic platform, plus framework for healthcare integration expansion.',
    approach: [
      'Conducted consumer research across hair care mindset and competitive evaluation',
      'Developed Heritage Network model for salon/stylist distribution integration',
      'Researched health/wellness integration opportunities beyond beauty',
      'Created data science foundation for scalable ML recommendations',
    ],
    color: 'blue',
    status: 'shipped',
    metrics: [
      { label: 'Model', value: '✓' },
      { label: 'ML', value: '✓' },
      { label: 'B2B2C', value: '✓' },
    ],
    tags: ['Beauty Tech', 'AI', 'Healthcare', 'Platform'],
  },
  {
    id: '10',
    title: 'Analytics Framework',
    slug: 'analytics-framework',
    client: 'Stellar Elements',
    domain: 'Internal',
    role: 'Thought Leadership',
    year: '2022',
    summary: 'Proprietary analytics transformation framework that won multi-million dollar Comcast engagement.',
    challenge: 'UX consulting team lacked analytics capabilities, limiting ability to demonstrate business impact and ROI to clients.',
    approach: [
      'Developed proprietary Action vs. Clarity Matrix for organizational performance',
      'Created three-pillar architecture (Strategic Targets, Data Literacy, Learning Culture)',
      'Built comprehensive training program with systematic capability transfer',
      'Redefined data-driven from dashboards to strategic shared causal models',
    ],
    color: 'orange',
    status: 'shipped',
    metrics: [
      { label: 'Win', value: '$MM+' },
      { label: 'CRO', value: '+46%' },
      { label: 'Teams', value: '5+' },
    ],
    tags: ['Analytics', 'Framework', 'Training', 'Sales'],
  },
  {
    id: '11',
    title: 'Form Health',
    slug: 'form-health',
    client: 'Form Health',
    domain: 'Healthcare',
    role: 'Growth PM',
    year: '2020',
    summary: 'Consumer subscription health product with 500+ paying customers and 2x conversion improvement.',
    challenge: 'Consumer health subscription needed systematic acquisition and activation optimization.',
    approach: [
      'Systematic funnel optimization across acquisition channels',
      'Lifecycle improvements for activation and retention',
      'A/B testing methodology for conversion optimization',
      'Data-driven iteration on onboarding experience',
    ],
    color: 'red',
    status: 'shipped',
    metrics: [
      { label: 'Users', value: '500+' },
      { label: 'CVR', value: '2x' },
      { label: 'LTV', value: '+' },
    ],
    tags: ['Healthcare', 'Consumer', 'Growth', 'Subscription'],
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
