import { AnyObject } from "@src/types/AnyObject";

export const parseQueryParams = (obj: AnyObject) => {
  const queries: string[] = [];

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
      queries.push(`${key}=${obj[key]}`);
    }
  });

  return queries.join("&");
};

export const calcOffset = (page: number, limit: number) => page * limit - limit;