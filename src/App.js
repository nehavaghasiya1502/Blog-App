import './App.css';
import Home from './pages/Home';
import NewsDetails from './pages/NewsDetails';
import { Routes, Route } from "react-router-dom";
// import Bookmarks from './pages/Bookmarks';
import BookMarks from "./pages/BookMarks";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/news" element={<NewsDetails />} />
      {/* <Route path="/bookmarks" element={<Bookmarks />} /> */}
      <Route path="/bookmarks" element={<BookMarks />} />

    </Routes>

  );
}

export default App;