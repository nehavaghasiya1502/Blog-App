import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const Favorites = () => {

const [fav,setFav] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("favorites")) || [];

setFav(data);

},[]);

return(

<div className="news-grid">

<h2>Favorite Articles</h2>

{fav.map((article,index)=>(
<NewsCard key={index} article={article}/>
))}

</div>

);

};

export default Favorites;