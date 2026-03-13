const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = async (category) => {

  let url = "";

  if (category === "all") {
    url = `https://newsapi.org/v2/everything?q=india&pageSize=20&apiKey=${API_KEY}`;
  } else {
    url = `https://newsapi.org/v2/everything?q=${category}&pageSize=20&apiKey=${API_KEY}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  console.log("API RESPONSE:", data);

  return data.articles;

};