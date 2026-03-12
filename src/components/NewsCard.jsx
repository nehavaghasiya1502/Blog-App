// import "./NewsCard.css";

// const NewsCard = ({ article }) => {

//   const image = article?.urlToImage || "https://via.placeholder.com/400";
//   const date = article?.publishedAt 
//     ? article.publishedAt.slice(0,10) 
//     : "No Date";

//   return (

//     <div className="card">

//       <img src={image} alt={article?.title || "news"} />

//       <div className="card-content">

//         <p>{date}</p>

//         <h3>{article?.title || "No Title Available"}</h3>

//       </div>

//     </div>

//   );

// };

// export default NewsCard;

import "./NewsCard.css";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ article }) => {

  const navigate = useNavigate();

  const image = article?.urlToImage || "https://via.placeholder.com/400";

  return (

    <div
      className="card"
      onClick={() => navigate("/news", { state: article })}
    >

      <img src={image} alt="news" />

      <div className="card-content">

        <p>{article?.publishedAt?.slice(0,10)}</p>

        <h3>{article?.title}</h3>

      </div>

    </div>

  );
};

export default NewsCard;