const URL_GET_NEWS =
  'https://newsapi.org/v2/top-headlines?country=ar&apiKey=e3b5b11d4944459fac8192812ab214c4&sortBy=publishedAt';

export default async function getNews() {
  let apiRequest = await fetch(URL_GET_NEWS);
  let response = await apiRequest.json();
  return response;
}
