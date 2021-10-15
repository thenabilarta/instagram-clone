import { MOVE_PAGE } from "../types";

const initialState = {
  page: "Home",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_PAGE:
      return {
        ...state,
        page: action.payload.data,
      };

    default:
      return state;
  }
};

export default Reducer;
