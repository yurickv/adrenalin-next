export interface Post {
  markup: string;
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string | Blob;
}

export type CreatedPost = Omit<Post, 'id'>;
