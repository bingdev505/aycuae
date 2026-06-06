import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  const url = new URL(context.request.url);
  const isPreview = url.searchParams.has('sanity-preview-perspective') || 
                    url.searchParams.has('preview') || 
                    context.cookies.has('sanity-preview');

  // If it's a preview request or the admin dashboard, bypass caching
  if (isPreview || url.pathname.startsWith('/admin') || url.pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  } else {
    // Cache the page on Cloudflare CDN for 1 week (604800 seconds)
    // stale-while-revalidate allows instant loading while fetching updates in the background
    response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=604800, stale-while-revalidate=86400');
  }

  return response;
});
