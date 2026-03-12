import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogCard from "../components/NewsCard";
import { fetchNews } from "../services/NewsApi";

const Home = () => {

  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getNews = async () => {
      try {
        setLoading(true);

        const data = await fetchNews(category);

        console.log("API DATA:", data);

        // safety check
        if (Array.isArray(data)) {
          setNews(data);
        } else {
          setNews([]);
        }

      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    getNews();

  }, [category]);

  return (
    <div>

      <Navbar setCategory={setCategory} />

      {/* Hero only when ALL */}
      {category === "all" && <Hero />}
      <div className="news-grid">

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading News...</p>

        ) : news.length > 0 ? (

          news
            .filter((article) => article.urlToImage)
            .map((article, index) => (
              <BlogCard
                key={article.url || index}
                article={article}
              />
            ))

        ) : (
          <p style={{ textAlign: "center" }}>No news found</p>
        )}

      </div>

    </div>
  );
};

export default Home;