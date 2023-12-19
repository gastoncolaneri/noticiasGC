export const isUserLoggedLS = () => {
  return localStorage.getItem("userLogged") === "true";
};

export const setUserLoggedLS = (isLogged) => {
  localStorage.setItem("userLogged", isLogged.toString());
};

export const setFavoritedNewsLS = (favoritedNews) => {
  let tmpListNews = [];
  const actualFavoritedNews = JSON.parse(localStorage.getItem("favoritedNews"));
  if (actualFavoritedNews) {
    tmpListNews = actualFavoritedNews;
    tmpListNews.push(favoritedNews);
  } else {
    tmpListNews.push(favoritedNews);
  }
  const parser = JSON.stringify(tmpListNews);
  localStorage.setItem("favoritedNews", parser);
};

export const getFavoritedNewsLS = () => {
  return JSON.parse(localStorage.getItem("favoritedNews"));
};

export const deleteFavoritedNewsLS = (favoritedNews) => {
  const actualFavoritedNews = JSON.parse(localStorage.getItem("favoritedNews"));
  const tmpFavoritedNews = actualFavoritedNews.filter(
    (item) => item?.url !== favoritedNews?.url
  );
  const parser = JSON.stringify(tmpFavoritedNews);
  localStorage.setItem("favoritedNews", parser);
};
