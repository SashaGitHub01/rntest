import { ICoin, IStats } from "@src/types/coins.types";
import { IStoryPreview } from "@src/types/stories.types";

export interface IGetCoinsRes {
  stats: IStats;
  coins: ICoin[];
}

export interface IGetStoriesRes {
  stories_preview: IStoryPreview[];
}
