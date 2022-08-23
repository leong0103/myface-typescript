interface PostUserModel {
  id: number;
  name: string;
  username: string;
  email: string;
}


// post.likeBy.some(liker => liker.id == 1);
export interface PostModel {
  id: number;
  message: string;
  imageUrl: string;
  createdAt: Date;
  postedBy: PostUserModel;
  likedBy: PostUserModel[];
  dislikedBy: PostUserModel[];
}
