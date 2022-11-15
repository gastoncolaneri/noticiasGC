import { useReducer, useState } from "react";
import moment from "moment";
import newsReducer, { newsInitialState } from "./newsReducer";
import {
  GET_NEWS,
  CHANGE_TYPE_NEWS,
  CHANGE_COUNTRY_NEWS,
  ARCHIVED_NEWS,
  DELETE_NEWS,
  ADD_NEWS,
} from "../types";
import {
  deleteArchivedNewsLS,
  setArchivedNewsLS,
} from "../../utils/localStorage";

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
    const urlNews = `https://backend-noticias-gc.vercel.app/?country=${state?.countryNews}&type=${state?.typeNews}`;
    const request = await fetch(urlNews);
    const response = await request.json();
    const news = await response.articles;
    const tmpAddedNews = state.newsAdded.filter(
      (item) =>
        item?.type === state?.typeNews && item?.country === state?.countryNews
    );
    const tmpNews = news?.map((item) => ({
      ...item,
      publishedAt: moment(item.publishedAt).format("LLL"),
    }));
    setIsLoading(false);

    dispatch({
      type: GET_NEWS,
      payload: [...tmpAddedNews, ...tmpNews],
    });
  };

  const addNews = (news) => {
    dispatch({
      type: ADD_NEWS,
      payload: [...state?.newsAdded, news],
    });
  };

  const archiveNews = (news) => {
    const isArchived = state?.archivedNews?.find(
      (item) => item?.url === news?.url
    );

    if (!isArchived) {
      setArchivedNewsLS(news);
      const archivedNews = state?.archivedNews?.concat(news);
      dispatch({
        type: ARCHIVED_NEWS,
        payload: archivedNews,
      });
    }
  };

  const deleteNews = (news) => {
    const archivedNews = state?.archivedNews?.filter(
      (item) => item?.url !== news?.url
    );
    deleteArchivedNewsLS(news);
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
    addNews,
    isLoading,
    allNews: state?.allNews,
    newsAdded: state?.newsAdded,
    archivedNews: state?.archivedNews,
    typeNews: state?.typeNews,
    countryNews: state?.countryNews,
  };
};

export default NewsActions;
