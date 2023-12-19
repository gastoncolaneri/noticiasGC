import NewsContext from "./NewsContext";
import NewsActions from "./NewsActions";

const NewsState = (props) => {
  const {
    favoriteNews,
    changeCountryNews,
    changeTypeNews,
    deleteNews,
    addNews,
    getNews,
    isLoading,
    allNews,
    favoritedNews,
    countryNews,
    typeNews,
    newsAdded,
  } = NewsActions();

  const value = {
    allNews,
    newsAdded,
    favoritedNews,
    typeNews,
    countryNews,
    isLoading: isLoading,
    changeTypeNews,
    changeCountryNews,
    getNews,
    favoriteNews,
    deleteNews,
    addNews,
  };

  return (
    <NewsContext.Provider value={value}>{props.children}</NewsContext.Provider>
  );
};

export default NewsState;
