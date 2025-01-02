import { User } from "./User";

export interface PostImage {
  link: string;
  imageId: number;
}

export interface Post {
  postId: number;
  content: string;
  createdAt: Date;
  images: PostImage[];
  user: User;
}
