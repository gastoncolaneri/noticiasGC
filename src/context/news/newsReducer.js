import {
  GET_NEWS,
  CHANGE_TYPE_NEWS,
  CHANGE_COUNTRY_NEWS,
  FAVORITED_NEWS,
  DELETE_NEWS,
  ADD_NEWS,
} from "../types";

export const newsInitialState = {
  allNews: [],
  newsAdded: [],
  favoritedNews: [],
  typeNews: "business",
  countryNews: "ar",
  isLoading: false,
};

const newsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS:
      return { ...state, allNews: payload };
    case ADD_NEWS:
      return { ...state, newsAdded: payload };
    case CHANGE_TYPE_NEWS:
      return { ...state, typeNews: payload };
    case CHANGE_COUNTRY_NEWS:
      return { ...state, countryNews: payload };
    case FAVORITED_NEWS:
      return { ...state, favoritedNews: payload };
    case DELETE_NEWS:
      return { ...state, favoritedNews: payload };
    default:
      return state;
  }
};

export default newsReducer;
