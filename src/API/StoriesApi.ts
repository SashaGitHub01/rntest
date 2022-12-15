import db from "../../db.json";
import { IGetStoriesRes } from "./types";

export class StoriesApi {
  static getStories = async (): Promise<IGetStoriesRes["stories_preview"]> => {
    return db.stories_preview;
  };

  static getStoriesList = async (): Promise<IGetStoriesRes["stories"]> => {
    return db.stories;
  };
}
