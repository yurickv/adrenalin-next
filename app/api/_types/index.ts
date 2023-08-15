export interface Post {
  title: string;
  description: string;
  topic: 'Training' | 'Motivation' | 'Nutrition';
  image: File;
}

export interface Image {
  originalname: string;
  buffer: Buffer;
}
