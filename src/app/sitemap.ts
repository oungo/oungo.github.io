import { getAllPosts } from '@lib/api';

import type { MetadataRoute } from 'next';

const BASE_URL = 'https://oungo.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [''].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = getAllPosts(['date', 'slug']).map(({ slug, date }) => ({
    url: `${BASE_URL}/posts/${slug}`,
    lastModified: date,
  }));

  return [...routes, ...posts];
}
