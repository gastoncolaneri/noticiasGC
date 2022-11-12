import {
  GET_NEWS,
  CHANGE_TYPE_NEWS,
  CHANGE_COUNTRY_NEWS,
  ARCHIVED_NEWS,
  DELETE_NEWS,
  ADD_NEWS,
} from "../types";

export const newsInitialState = {
  allNews: [],
  newsAdded: [],
  archivedNews: [],
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
    case ARCHIVED_NEWS:
      return { ...state, archivedNews: payload };
    case DELETE_NEWS:
      return { ...state, archivedNews: payload };
    default:
      return state;
  }
};

export default newsReducer;
