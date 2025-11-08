import { MetadataRoute } from 'next';
import { projectsData } from '@/components/Projects/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  // Detect environment and set appropriate base URL
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment
    ? `http://localhost:${process.env.PORT || 3000}`
    : 'https://kelvinperez.com';

  // Static pages with basic SEO properties
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Individual project pages
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...projectPages];
}
