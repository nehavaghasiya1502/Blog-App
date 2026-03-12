import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {

return(

<div className="hero">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
>
Discover
</motion.h1>

<motion.h2
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
>
Amazing Stories
</motion.h2>

<p>
Explore the latest news and user-created content from around the world
</p>

</div>

);

};

export default Hero;