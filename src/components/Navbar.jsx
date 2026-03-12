// import "./Navbar.css";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const categories = [
//     "all",
//     "general",
//     "business",
//     "entertainment",
//     "health",
//     "science",
//     "sports",
//     "technology"
// ];

// const Navbar = ({ setCategory }) => {

//     const [active, setActive] = useState("all");

//     const handleCategory = (cat) => {
//         setCategory(cat);     
//         setActive(cat);   
//     };

//     return (

//         <div className="navbar">

//             <div className="nav-top">

//                 <div className="logo">
//                     Blog<span>Hub</span>
//                 </div>

//                 <div className="nav-icons">

//                     <motion.div whileHover={{ scale: 1.2 }} className="icon">🔍</motion.div>
//                     <motion.div whileHover={{ scale: 1.2 }} className="icon">🔖</motion.div>
//                     <motion.div whileHover={{ scale: 1.2 }} className="icon">❤️</motion.div>

//                     <motion.button whileHover={{ scale: 1.05 }} className="add-btn">
//                         + Add Blog
//                     </motion.button>

//                 </div>

//             </div>

//             <div className="categories">

//                 {categories.map((cat, index) => (
//                     <span
//                         key={index}
//                         className={active === cat ? "active" : ""}
//                         onClick={() => handleCategory(cat)}
//                     >
//                         {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                     </span>
//                 ))}

//             </div>

//         </div>

//     );
// };

// export default Navbar;

import "./Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    "all",
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
];

const Navbar = ({ setCategory }) => {

    const [active, setActive] = useState("all");
    const navigate = useNavigate();

    const handleCategory = (cat) => {
        setCategory(cat);
        setActive(cat);
    };

    return (
        <div className="navbar">

            <div className="nav-top">

                <div className="logo" onClick={() => navigate("/")}>
                    Blog<span>Hub</span>
                </div>

                <div className="nav-icons">

                    <motion.div whileHover={{ scale: 1.2 }} className="icon">🔍</motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="icon"
                        onClick={() => navigate("/bookmarks")}
                    >
                        🔖
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="icon"
                        onClick={() => navigate("/favorites")}
                    >
                        ❤️
                    </motion.div>

                    <motion.button whileHover={{ scale: 1.05 }} className="add-btn">
                        + Add Blog
                    </motion.button>

                </div>

            </div>

            <div className="categories">

                {categories.map((cat, index) => (
                    <span
                        key={index}
                        className={active === cat ? "active" : ""}
                        onClick={() => handleCategory(cat)}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                ))}

            </div>

        </div>
    );
};

export default Navbar;