import { MetadataRoute } from 'next';
import postHttpService from '@/app/_services/post.service';
import { routeSitemap } from '@/const/routeSitemap';

const URL = 'https://gym-adrenalin.com.ua';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await postHttpService.getPosts({ limit: 100 });
  const postsXml = posts.map(({ id }: { id: string }) => ({
    url: `${URL}/blog/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'always',
    priority: 1,
  }));

  const routes = routeSitemap.map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'always',
    priority: 1,
  }));

  return [...routes, ...postsXml];
}
