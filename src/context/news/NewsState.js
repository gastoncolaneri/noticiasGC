import NewsContext from "./NewsContext";
import NewsActions from "./NewsActions";

const NewsState = (props) => {
  const {
    archiveNews,
    changeCountryNews,
    changeTypeNews,
    deleteNews,
    addNews,
    getNews,
    isLoading,
    allNews,
    archivedNews,
    countryNews,
    typeNews,
    newsAdded,
  } = NewsActions();

  const value = {
    allNews,
    newsAdded,
    archivedNews,
    typeNews,
    countryNews,
    isLoading: isLoading,
    changeTypeNews,
    changeCountryNews,
    getNews,
    archiveNews,
    deleteNews,
    addNews,
  };

  return (
    <NewsContext.Provider value={value}>{props.children}</NewsContext.Provider>
  );
};

export default NewsState;
