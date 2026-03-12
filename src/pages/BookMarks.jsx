// import { useEffect, useState } from "react";
// import NewsCard from "../components/NewsCard";

// const Bookmarks = () => {

// const [saved,setSaved] = useState([]);

// useEffect(()=>{

// const data = JSON.parse(localStorage.getItem("bookmarks")) || [];

// setSaved(data);

// },[]);

// return(

// <div className="news-grid">

// <h2>Saved Articles</h2>

// {saved.map((article,index)=>(
// <NewsCard key={index} article={article}/>
// ))}

// </div>

// );

// };

// export default Bookmarks;

import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import "./Bookmarks.css";

const Bookmarks = () => {

  const [saved, setSaved] = useState([]);

  // Load bookmarks from localStorage
  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("bookmarks")) || [];

    setSaved(data);

  }, []);

  // Remove bookmark
  const removeBookmark = (url) => {

    const updated = saved.filter(article => article.url !== url);

    localStorage.setItem("bookmarks", JSON.stringify(updated));

    setSaved(updated);

  };

  return (

    <div className="bookmarks-page">

      <h2 className="bookmark-title">🔖 Saved Articles</h2>

      {saved.length === 0 ? (

        <p className="empty">No bookmarks yet</p>

      ) : (

        <div className="news-grid">

          {saved.map((article, index) => (

            <div key={index} className="bookmark-card">

              <NewsCard article={article} />

              <button
                className="remove-btn"
                onClick={() => removeBookmark(article.url)}
              >
                ❌ Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

export default Bookmarks;