export async function getPosts(page: number) {
  try {
    const posts = await fetch(`http://${process.env.HOST}/api/post?limit=12`);
    return posts.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostForMain(page?: number) {
  try {
    const posts = await fetch(`http://${process.env.HOST}/api/post?limit=3`);
    return posts.json();
  } catch (error) {
    console.log(error);
  }
}
