export interface IStoryDetails {
  id: number;
  image: string;
  username: string;
  list: string[];
}

export type IStoryPreview = Pick<IStoryDetails, "id" | "image" | "username">;
