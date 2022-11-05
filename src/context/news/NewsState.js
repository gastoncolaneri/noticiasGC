import NewsContext from "./NewsContext";
import NewsActions from "./NewsActions";

const NewsState = (props) => {
  const {
    archiveNews,
    changeCountryNews,
    changeTypeNews,
    deleteNews,
    getNews,
    isLoading,
    allNews,
    archivedNews,
    countryNews,
    typeNews,
  } = NewsActions();

  const value = {
    allNews,
    archivedNews,
    typeNews,
    countryNews,
    isLoading: isLoading,
    changeTypeNews,
    changeCountryNews,
    getNews,
    archiveNews,
    deleteNews,
  };

  return (
    <NewsContext.Provider value={value}>{props.children}</NewsContext.Provider>
  );
};

export default NewsState;
