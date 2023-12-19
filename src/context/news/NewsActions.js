import { useReducer, useState } from "react";
import moment from "moment";
import newsReducer, { newsInitialState } from "./newsReducer";
import {
  GET_NEWS,
  CHANGE_TYPE_NEWS,
  CHANGE_COUNTRY_NEWS,
  FAVORITED_NEWS,
  DELETE_NEWS,
  ADD_NEWS,
} from "../types";
import {
  deleteFavoritedNewsLS,
  setFavoritedNewsLS,
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

  const favoriteNews = (news) => {
    const isFavorited = state?.favoritedNews?.find(
      (item) => item?.url === news?.url
    );

    if (!isFavorited) {
      setFavoritedNewsLS(news);
      const favoritedNews = state?.favoritedNews?.concat(news);
      dispatch({
        type: FAVORITED_NEWS,
        payload: favoritedNews,
      });
    }
  };

  const deleteNews = (news) => {
    const favoritedNews = state?.favoritedNews?.filter(
      (item) => item?.url !== news?.url
    );
    deleteFavoritedNewsLS(news);
    dispatch({
      type: DELETE_NEWS,
      payload: favoritedNews,
    });
  };
  return {
    changeTypeNews,
    changeCountryNews,
    getNews,
    favoriteNews,
    deleteNews,
    addNews,
    isLoading,
    allNews: state?.allNews,
    newsAdded: state?.newsAdded,
    favoritedNews: state?.favoritedNews,
    typeNews: state?.typeNews,
    countryNews: state?.countryNews,
  };
};

export default NewsActions;
