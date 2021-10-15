import { MOVE_PAGE } from "../types";

export const toHomePage = (data) => {
  return {
    type: MOVE_PAGE,
    payload: { data: data },
  };
};
