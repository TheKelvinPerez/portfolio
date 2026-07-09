import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/_next/', '/favicon.ico'],
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://kelvinperez.com/sitemap.xml',
    host: 'https://kelvinperez.com',
  };
}
