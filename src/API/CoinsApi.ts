import { parseQueryParams } from "@src/helpers";
import { ICoinrankRes } from "@src/types/coins.types";
import { AnyObject } from "@src/types/AnyObject";
import { instance } from ".";
import { IGetCoinsRes } from "./types";

interface IGetCoinsParams extends AnyObject {
  offset: number;
  limit: number;
}

export class CoinsApi {
  static getCoins = async (params: IGetCoinsParams): Promise<IGetCoinsRes> => {
    const { offset = 1, limit = 20 } = params;

    const query = parseQueryParams(params);
    const { data } = await instance.get<ICoinrankRes<IGetCoinsRes>>(`/coins?limit=${limit}&offset=${offset}&${query}`);

    return data.data;
  };
}