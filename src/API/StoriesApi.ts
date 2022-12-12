import db from '../../db.json'
import { IGetStoriesRes } from "./types";

export class StoriesApi {
  static getStories = async (): Promise<IGetStoriesRes['stories_preview']> => {
    return db.stories_preview as IGetStoriesRes['stories_preview']
  };
}
