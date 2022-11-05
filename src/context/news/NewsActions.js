import { useReducer, useState } from "react";
import newsReducer, { newsInitialState } from "./newsReducer";
import {
  GET_NEWS,
  CHANGE_TYPE_NEWS,
  CHANGE_COUNTRY_NEWS,
  ARCHIVED_NEWS,
  DELETE_NEWS,
} from "../types";

const NewsActions = () => {
  const [state, dispatch] = useReducer(newsReducer, newsInitialState);
  const [isLoading, setIsLoading] = useState(false);

  const changeTypeNews = (typeNews) => {
    dispatch({ type: CHANGE_TYPE_NEWS, payload: typeNews });
  };
  const changeCountryNews = (countryNews) => {
    dispatch({
      type: CHANGE_COUNTRY_NEWS,
      payload: countryNews,
    });
  };

  const getNews = async () => {
    setIsLoading(true);
    const urlNews = `https://newsapi.org/v2/top-headlines?country=${state.countryNews}&category=${state.typeNews}&apiKey=e3b5b11d4944459fac8192812ab214c4&sortBy=publishedAt`;
    const apiRequest = await fetch(urlNews);
    const response = await apiRequest.json();
    const news = await response.articles;
    setIsLoading(false);

    dispatch({
      type: GET_NEWS,
      payload: news,
    });
  };

  const archiveNews = (news) => {
    const archivedNews = state.archivedNews.concat(news);
    dispatch({
      type: ARCHIVED_NEWS,
      payload: archivedNews,
    });
  };

  const deleteNews = (news) => {
    const archivedNews = state.archivedNews.filter(
      (item) => item?.url !== news?.url
    );

    dispatch({
      type: DELETE_NEWS,
      payload: archivedNews,
    });
  };
  return {
    changeTypeNews,
    changeCountryNews,
    getNews,
    archiveNews,
    deleteNews,
    isLoading,
    allNews: state.allNews,
    archivedNews: state.archivedNews,
    typeNews: state.typeNews,
    countryNews: state.countryNews,
  };
};

export default NewsActions;
