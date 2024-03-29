export interface Post {
  id: string;
  title: string;
  description: string;
  topic: 'Training' | 'Motivation' | 'Nutrition';
  image: string;
  // image: File;
}

export interface Image {
  originalname: string;
  buffer: Buffer;
}

export type Filter = {
  topic?: RegExp;
  search?: RegExp;
};
