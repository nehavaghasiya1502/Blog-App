import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "./NewsDetails.css";

const NewsDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const article = location.state;

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    if (!article) return <p>No article found</p>;

    const image = article?.urlToImage || "https://via.placeholder.com/1200";

    const readingTime = Math.ceil((article?.content || "").split(" ").length / 200);

    const shareURL = article.url;

    const handleBookmark = () => {

        const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];

        const exists = saved.find(item => item.url === article.url);

        if (!exists) {
            saved.push(article);
            localStorage.setItem("bookmarks", JSON.stringify(saved));
            setBookmarked(true);
        }

    };
const handleFavorite = () => {

  const data = JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = data.find((item) => item.url === article.url);

  if (!exists) {
    data.push(article);
    localStorage.setItem("favorites", JSON.stringify(data));
  }

  setLiked(!liked);
};
    return (

        <div className="news-page">

            {/* Floating Navbar */}

            <div className="floating-nav">

                <button onClick={() => navigate(-1)} className="back-btn">
                    ← Back
                </button>

                <div className="nav-actions">

                  <button
className={`like-btn ${liked ? "liked" : ""}`}
onClick={handleFavorite}
>
❤️
</button>

                    <button
                        className={`bookmark-btn ${bookmarked ? "saved" : ""}`}
                        onClick={handleBookmark}
                    >
                        🔖
                    </button>

                    <a
                        href={`https://wa.me/?text=${shareURL}`}
                        target="_blank"
                        rel="noreferrer"
                        className="share-btn"
                    >
                        WhatsApp
                    </a>

                    <a
                        href={`https://twitter.com/intent/tweet?url=${shareURL}`}
                        target="_blank"
                        rel="noreferrer"
                        className="share-btn"
                    >
                        Twitter
                    </a>

                </div>

            </div>

            {/* Image */}

            <motion.img
                src={image}
                alt=""
                className="news-image"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            />

            {/* Content */}

            <div className="news-container">

                <div className="meta">

                    <span className="source">
                        {article?.source?.name || "News Source"}
                    </span>

                    <span className="author">
                        {article?.author || "Unknown Author"}
                    </span>

                    <span className="time">
                        ⏱ {readingTime} min read
                    </span>

                </div>

                <h1 className="title">
                    {article.title}
                </h1>

                <p className="description">
                    {article.description}
                </p>

                <p className="content">
                    {article.content}
                </p>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="read-btn"
                >
                    Read Full Article →
                </a>

            </div>

        </div>
    );
};

export default NewsDetails;