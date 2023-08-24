export async function getPosts(page?: number) {
  try {
    const posts = await fetch(`http://${process.env.HOST}/api/post?limit=12`);
    return posts.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostForMain(post?: number) {
  try {
    const posts = await fetch(
      `http://${process.env.HOST}/api/post?limit=${post}`
    );
    return posts.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(id: string) {
  try {
    const res = await fetch(`http://${process.env.HOST}/api/post/${id}`);
    if (!res.ok) return undefined;
    const { post } = await res.json();
    return post;
  } catch (e) {
    console.log(e);
  }
}
