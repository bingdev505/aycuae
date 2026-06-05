import { defineType, defineField } from 'sanity';

// 1. Site Settings (Singleton)
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Site Title', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'address', title: 'Physical Address', type: 'string' }),
    defineField({ name: 'hours', title: 'Operating Hours', type: 'string' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'twitterUrl', title: 'Twitter URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'logo', title: 'Header Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'footerLogo', title: 'Footer Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'footerAbout', title: 'Footer About Text', type: 'text' }),
    defineField({ name: 'footerGallery', title: 'Footer Gallery Images', type: 'array', of: [{ type: 'image' }] }),
    // SEO Fields
    defineField({ name: 'metaDescription', title: 'Meta Description (SEO)', type: 'text', description: 'A brief summary of your site for search engines' }),
    defineField({ name: 'metaKeywords', title: 'Meta Keywords (SEO)', type: 'string', description: 'Comma-separated keywords for search engines' }),
    defineField({ name: 'ogImage', title: 'Open Graph Image (Social Sharing)', type: 'image', description: 'Image shown when sharing the site on Facebook/Twitter' }),
  ],
});

// 2. Hero Slide
export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Hero Slides',
  type: 'document',
  fields: [
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'buttonText', title: 'Primary Button Text', type: 'string' }),
    defineField({ name: 'buttonUrl', title: 'Primary Button URL', type: 'string' }),
    defineField({ name: 'bgImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ],
});

// 3. Feature Card (Value Propositions)
export const featureCard = defineType({
  name: 'featureCard',
  title: 'Feature Cards',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'icon', title: 'Icon (e.g., fal fa-hammer)', type: 'string' }),
    defineField({ name: 'colorStyle', title: 'Style Accent (e.g., orange, blue, green)', type: 'string' }),
  ],
});

// 4. About Section (Singleton)
export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({ name: 'badgeTitle', title: 'Badge Title (e.g., 30+)', type: 'string' }),
    defineField({ name: 'badgeSubtitle', title: 'Badge Subtitle (e.g., Years of Experience)', type: 'string' }),
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'featuresList', title: 'Key Features (Bulleted)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'youtubeUrl', title: 'YouTube Video Link', type: 'url' }),
    defineField({ name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } }),
  ],
});

// 5. Service
export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'icon', title: 'Icon Class (e.g., uil-home)', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
});

// 6. Project (Portfolio)
export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'Category (e.g., Architecture, Building)', type: 'string' }),
    defineField({ name: 'image', title: 'Project Image', type: 'image', options: { hotspot: true } }),
  ],
});

// 7. Testimonial
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role / Designation', type: 'string' }),
    defineField({ name: 'quote', title: 'Testimonial Quote', type: 'text' }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number' }),
    defineField({ name: 'image', title: 'Client Image', type: 'image', options: { hotspot: true } }),
  ],
});

// 8. Team Member
export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'twitterUrl', title: 'Twitter URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
  ],
});

// 9. Blog Post
export const post = defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'publishDate', title: 'Publish Date', type: 'date' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }] }),
  ],
});

export const schemaTypes = [
  siteSettings,
  heroSlide,
  featureCard,
  aboutSection,
  service,
  project,
  testimonial,
  teamMember,
  post,
];
