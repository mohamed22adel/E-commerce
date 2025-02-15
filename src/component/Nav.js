import "./Nav.css";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from "react";
import { Link } from "react-router-dom";
export default function First_Headers() {

    const [isXVisible, setIsXVisible] = useState(false);

    const handleYClick = () => {
        setIsXVisible(true); 
    };

    const handleZClick = () => {
        setIsXVisible(false); 
    };

    const [isVisible, setIsvisible] = useState(false);
    const HandelclicK = () =>{
        setIsvisible(!isVisible);
    }

    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variant1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
    };


    const [ count, setCount] = useState(0);
    const handleClick = ()=>{
    setCount(count + 1);
    }

    const [ count1, setCount1] = useState(0);
    const handleClick1 = ()=>{
    setCount1(count1 + 1);
    }

    
return(

<div style={{position:"fixed",alignItems:"center"}} className="container">
<div className="nav_container">
<div className="nav">
<div onClick={handleYClick} className="fa_bar"><i class="fa-solid fa-bars"></i></div>
<div className="title">STOREISH</div>


<div className="nav_ul">
    <ul>
        <Link to="/"><li className="active">Home</li></Link>
        <Link to="/Products"><li>Products</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to="/About"><li>About</li></Link>
    </ul>
</div>


<div className="shopping-fav">
    <img src={require("../storeish_images/shopping-cart.png")} alt="shopping-fav"/>
    <div className="shopping-fav_count">{count}</div>
    </div>

<div className="shopping-bag">
    <img src={require("../storeish_images/shopping-bag.png")} alt="shopping-bag"/>
    <div className="shopping-bag_count">{count1}</div>
    </div>
<div className="night"><i class="fa-solid fa-moon"></i></div>
<div onClick={HandelclicK} className="character"><img src={require("../storeish_images/man.png")} alt="char"/></div>
    </div>
</div>
<div ref={ref1} style={{display:isXVisible?"block":"none"}} className="bars_div">
<motion.div
    initial="hidden"
    animate={inView1 ? 'visible' : 'hidden'}
    variants={variant1}
    transition={{ duration: 0.6 }}
        >
    <div className="bars_name">
        <div className="title">STOREISH</div>
        <div onClick={handleZClick}><i class="fa-solid fa-xmark"></i></div>
    </div>
<ul>
<Link to="/"><div className="active2"><img src={require("../storeish_images/home.png")} alt="i"/>
    <li>Home</li></div></Link>
    <Link to="/Products"><div><img src={require("../storeish_images/features.png")} alt="i"/>
    <li>Products</li></div></Link>
    <div><img src={require("../storeish_images/add-to-favorites.png")} alt="i"/>
    <li>Wishlist</li></div>
    <div><img src={require("../storeish_images/people.png")} alt="i"/>
    <li>Profile</li></div>
    <Link to="/Contact"><div><img src={require("../storeish_images/chat.png")} alt="i"/>
    <li>Contact Us</li></div></Link>
    <Link to="/About"><div><img src={require("../storeish_images/list.png")} alt="i"/>
    <li>About Us</li></div></Link>
</ul>
<div className="bars_buttons">
    <Link to="/Log In"><button>Login</button></Link>
    <Link to="/Sign Up"><button>Signup</button></Link>
</div>
</motion.div>
</div>

<div style={{display:isVisible? "flex" : "none"}} className="character_bar">

    <ul>
    <div><img src={require("../storeish_images/people.png")} alt="i"/>
    <li>Profile</li></div>

    <div><img src={require("../storeish_images/people.png")} alt="i"/>
    <li>Signup</li></div>
    <div className="character_bar_logout"><img src={require("../storeish_images/people.png")} alt="i"/>
    <li>Log Out</li></div>
    </ul>

</div>

</div>

);
}