export interface Post {
  markup: string;
  id: string;
  topic: string;
  title: string;
  description: string;
  image: string;
}

export type CreatedPost = Omit<Post, 'id'>;
