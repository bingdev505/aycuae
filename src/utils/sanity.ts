import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient;

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return '';
  try {
    return builder.image(source).url();
  } catch (e) {
    return '';
  }
}

// Fallback helper to return default mock data if Sanity query fails or returns empty
export async function querySanity<T>(query: string, fallbacks: T): Promise<T> {
  try {
    const data = await client.fetch(query);
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return fallbacks;
    }
    return data;
  } catch (error) {
    console.warn('Sanity query failed, using mock fallbacks:', error);
    return fallbacks;
  }
}
