import postHttpService from '@/app/_services/post.service';

const URL = 'https://gym-adrenalin.com.ua';

export default async function sitemap() {
  const { posts } = await postHttpService.getPosts({ limit: 100 });
  const postsXml = posts.map(({ id, updatedAt }) => ({
    url: `${URL}/blog/${id}`,
    lastModified: updatedAt,
  }));

  const routes = ['', '/portfolio', '/blog'].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...postsXml];
}
