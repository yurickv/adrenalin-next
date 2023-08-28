class PostService {
  constructor() {}

  async getPosts(
    page: string | number | undefined = 1,
    limit: string | number | undefined = 12
  ) {
    try {
      const posts = await fetch(
        `http://${
          process.env.HOST || process.env.NEXT_PUBLIC_HOST
        }/api/post?page=${page}&limit=${limit}`
      );
      return posts.json();
    } catch (e) {
      console.log(e);
    }
  }

  async getPostById(id: string) {
    try {
      const res = await fetch(
        `http://${
          process.env.HOST || process.env.NEXT_PUBLIC_HOST
        }/api/post/${id}`
      );
      if (!res.ok) return undefined;
      const { post } = await res.json();
      return post;
    } catch (e) {
      console.log(e);
    }
  }

  // export async function getPost(id: string) {
  //   try {
  //     const res = await fetch(`http://${process.env.HOST}/api/post/${id}`);
  //     if (!res.ok) return undefined;
  //     const { post } = await res.json();
  //     return post;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async createPost(post: FormData) {
    try {
      const res = await fetch(
        `http://${process.env.NEXT_PUBLIC_HOST}/api/post/new`,
        {
          method: 'POST',
          body: post,
        }
      );
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }

  async updatePost(id: string, post: FormData) {
    try {
      const res = await fetch(
        `http://${process.env.NEXT_PUBLIC_HOST}/api/post/${id}`,
        {
          method: 'PATCH',
          body: post,
        }
      );
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }

  async deletePost(id: string) {
    try {
      const res = await fetch(
        `http://${process.env.NEXT_PUBLIC_HOST}/api/post/${id}`,
        {
          method: 'DELETE',
        }
      );
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}

const postHttpService = new PostService();

export default postHttpService;
