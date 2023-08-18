export async function getPosts(page: number) {
  try {
    const posts = await fetch('http://localhost:3000/api/post?limit=12');
    return posts.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostForMain(page?: number) {
  try {
    const posts = await fetch('http://localhost:3000/api/post?limit=3');
    return posts.json();
  } catch (error) {
    console.log(error);
  }
}
