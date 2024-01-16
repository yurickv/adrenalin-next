import { MetadataRoute } from 'next';
import postHttpService from '@/app/_services/post.service';

const URL = 'https://gym-adrenalin.com.ua';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await postHttpService.getPosts({ limit: 100 });
  const postsXml = posts.map(({ id }: { id: string }) => ({
    url: `${URL}/blog/${id}`,
    changeFrequency: 'always',
    priority: 1,
  }));

  const routes = ['', '/portfolio', '/blog'].map(route => ({
    url: `${URL}${route}`,
    changeFrequency: 'always',
    priority: 1,
  }));

  return [...routes, ...postsXml];
}
