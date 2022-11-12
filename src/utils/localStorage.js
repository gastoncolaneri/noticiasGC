export const isUserLoggedLS = () => {
  return localStorage.getItem("userLogged") === "true";
};

export const setUserLoggedLS = (isLogged) => {
  localStorage.setItem("userLogged", isLogged.toString());
};

export const setArchivedNewsLS = (archivedNews) => {
  let tmpListNews = [];
  const actualArchivedNews = JSON.parse(localStorage.getItem("archivedNews"));
  if (actualArchivedNews) {
    tmpListNews = actualArchivedNews;
    tmpListNews.push(archivedNews);
  } else {
    tmpListNews.push(archivedNews);
  }
  const parser = JSON.stringify(tmpListNews);
  localStorage.setItem("archivedNews", parser);
};

export const getArchivedNewsLS = () => {
  return JSON.parse(localStorage.getItem("archivedNews"));
};

export const deleteArchivedNewsLS = (archivedNews) => {
  const actualArchivedNews = JSON.parse(localStorage.getItem("archivedNews"));
  const tmpArchivedNews = actualArchivedNews.filter(
    (item) => item?.url !== archivedNews?.url
  );
  const parser = JSON.stringify(tmpArchivedNews);
  localStorage.setItem("archivedNews", parser);
};
