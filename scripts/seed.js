import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'lup7v9pz';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error('Error: SANITY_TOKEN is not defined in .env file!');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-06-05',
  useCdn: false,
});

const mockData = [
  // 1. Site Settings
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteTitle: 'ConstX | Construction, Building & Renovation',
    phone: '+0044 9922299',
    email: 'info@constx.com',
    address: '22 Sterling Close, Winchester, W23 4FD',
    hours: 'Sun - Fri (7:00 - 18:00)',
    facebookUrl: 'https://facebook.com',
    twitterUrl: 'https://twitter.com',
    instagramUrl: 'https://instagram.com',
    linkedinUrl: 'https://linkedin.com',
    footerAbout: 'ConstX is a premium construction, building, and renovation contractor offering high-quality architectural, design, and remodeling solutions.',
    metaDescription: 'ConstX is a premium, modern construction, renovation, and building contractor offering high-quality structural and design solutions.',
    metaKeywords: 'construction, renovation, builder, architect, design, contractor, engineering',
  },
  // 2. About Section
  {
    _id: 'aboutSection',
    _type: 'aboutSection',
    badgeTitle: '30+',
    badgeSubtitle: 'Years of Experience',
    title: 'We are Professional Builders and Contractors since 1996',
    description: 'With over three decades of building and construction engineering experience, we design and construct residential, commercial, and industrial facilities. We pride ourselves on engineering safety, building durability, and premium finishes.',
    featuresList: [
      'Certified structural engineers & planners',
      'Premium quality raw materials and modern tools',
      'Accurate blueprints and cost estimation',
      'On-time delivery and strict adherence to deadlines'
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  // 3. Hero Slides
  {
    _id: 'hero-1',
    _type: 'heroSlide',
    subtitle: 'Welcome to ConstX',
    title: 'We Build Modern Masterpieces',
    description: 'Professional engineering and contracting services for premium projects. Leading structural standards for modern buildings.',
    buttonText: 'Our Services',
    buttonUrl: '#services',
  },
  {
    _id: 'hero-2',
    _type: 'heroSlide',
    subtitle: 'Certified Professionals',
    title: 'Transforming Spaces & Lives',
    description: 'From home renovation to corporate skyscrapers, we bring design dreams into reality with premium materials and expertise.',
    buttonText: 'View Projects',
    buttonUrl: '#projects',
  },
  // 4. Feature Cards
  {
    _id: 'feat-1',
    _type: 'featureCard',
    title: 'Smart Planning',
    description: 'We plan and draft every detail to minimize resource waste and deliver on time.',
    icon: '📐',
    colorStyle: 'orange',
  },
  {
    _id: 'feat-2',
    _type: 'featureCard',
    title: 'Professional Building',
    description: 'Expert structural and architectural builders handling heavy-duty industrial works.',
    icon: '🏗️',
    colorStyle: 'green',
  },
  {
    _id: 'feat-3',
    _type: 'featureCard',
    title: 'Quality Renovation',
    description: 'Bespoke designs and premium interior finishes for homes and corporate spaces.',
    icon: '🏠',
    colorStyle: 'blue',
  },
  // 5. Services
  {
    _id: 'serv-1',
    _type: 'service',
    title: 'General Contracting',
    slug: { _type: 'slug', current: 'general-contracting' },
    description: 'A-to-Z construction project management, permitting, subcontracting, and safety execution.',
    icon: '🏗️',
  },
  {
    _id: 'serv-2',
    _type: 'service',
    title: 'Building Architecture',
    slug: { _type: 'slug', current: 'building-architecture' },
    description: 'Creative and modern structural drafts, blueprints, and architectural engineering blueprints.',
    icon: '📐',
  },
  {
    _id: 'serv-3',
    _type: 'service',
    title: 'Interior Design',
    slug: { _type: 'slug', current: 'interior-design' },
    description: 'Bespoke custom layouts, premium furniture mapping, lighting aesthetics, and finishes.',
    icon: '✨',
  },
  {
    _id: 'serv-4',
    _type: 'service',
    title: 'House Renovation',
    slug: { _type: 'slug', current: 'house-renovation' },
    description: 'Modern room additions, kitchen modeling, bathroom repairs, and full house remodeling.',
    icon: '🔨',
  },
  {
    _id: 'serv-5',
    _type: 'service',
    title: 'Metal Roofing',
    slug: { _type: 'slug', current: 'metal-roofing' },
    description: 'Highly durable weather-resistant metallic roof structures, insulation, and repair works.',
    icon: '🏠',
  },
  {
    _id: 'serv-6',
    _type: 'service',
    title: 'Property Maintenance',
    slug: { _type: 'slug', current: 'property-maintenance' },
    description: 'Routine structural integrity checks, electrical audits, plumbing, and wear-and-tear fixes.',
    icon: '🔧',
  },
  // 6. Projects
  {
    _id: 'proj-1',
    _type: 'project',
    title: 'Modern Residential Complex',
    category: 'Building',
    slug: { _type: 'slug', current: 'modern-residential' },
  },
  {
    _id: 'proj-2',
    _type: 'project',
    title: 'Skyline Business Tower',
    category: 'Architecture',
    slug: { _type: 'slug', current: 'skyline-business-tower' },
  },
  {
    _id: 'proj-3',
    _type: 'project',
    title: 'Industrial Factory Plant',
    category: 'Infrastructure',
    slug: { _type: 'slug', current: 'industrial-factory-plant' },
  },
  {
    _id: 'proj-4',
    _type: 'project',
    title: 'Luxury Eco Villa',
    category: 'Renovation',
    slug: { _type: 'slug', current: 'luxury-eco-villa' },
  },
  // 7. Testimonials
  {
    _id: 'test-1',
    _type: 'testimonial',
    clientName: 'Sarah Jenkins',
    role: 'CEO, Jenkins Logistics',
    quote: 'ConstX remodeled our main corporate headquarters. Their builders were professional, efficient, and finished ahead of schedule. Highly recommended!',
    rating: 5,
  },
  {
    _id: 'test-2',
    _type: 'testimonial',
    clientName: 'David Miller',
    role: 'Home Owner',
    quote: 'Excellent service! They redesigned our kitchen and built a modern garage addition. The cost was transparent and exactly matched the initial estimate.',
    rating: 5,
  },
  // 8. Team Members
  {
    _id: 'team-1',
    _type: 'teamMember',
    name: 'Robert Carter',
    role: 'Chief Architect',
    facebookUrl: 'https://facebook.com',
    twitterUrl: 'https://twitter.com',
    instagramUrl: 'https://instagram.com',
  },
  {
    _id: 'team-2',
    _type: 'teamMember',
    name: 'Alex Martinez',
    role: 'Site Supervisor',
    facebookUrl: 'https://facebook.com',
    twitterUrl: 'https://twitter.com',
    instagramUrl: 'https://instagram.com',
  },
  {
    _id: 'team-3',
    _type: 'teamMember',
    name: 'Michael Chen',
    role: 'Structural Engineer',
    facebookUrl: 'https://facebook.com',
    twitterUrl: 'https://twitter.com',
    instagramUrl: 'https://instagram.com',
  },
  // 9. Blog Posts
  {
    _id: 'post-1',
    _type: 'post',
    title: 'Top 5 Material Selection Standards for Heavy Building Projects',
    slug: { _type: 'slug', current: 'top-material-standards' },
    publishDate: '2026-06-01',
    excerpt: 'Selecting materials for building is crucial. Learn the top structural criteria to inspect for durable safety standards.',
  },
  {
    _id: 'post-2',
    _type: 'post',
    title: 'Minimalist Interior Design Trends to Revitalize Modern Living Rooms',
    slug: { _type: 'slug', current: 'minimalist-interior-design-trends' },
    publishDate: '2026-05-28',
    excerpt: 'Reimagine space using glass, metallic layouts, and ambient lights to give an open-concept premium look.',
  },
  {
    _id: 'post-3',
    _type: 'post',
    title: 'Why Quality Auditing Prevents Structural Leaks in Commercial Pools',
    slug: { _type: 'slug', current: 'quality-audits-leaks' },
    publishDate: '2026-05-15',
    excerpt: 'Cracks and moisture leaks are costly. Read our comprehensive guide on engineering barriers and proof testing.',
  },
];

async function seed() {
  console.log(`Starting database seed for project ${projectId}...`);
  try {
    for (const doc of mockData) {
      console.log(`Upserting document: ${doc._id} (${doc._type})`);
      await client.createOrReplace(doc);
    }
    console.log('✅ Sanity Database Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  }
}

seed();
