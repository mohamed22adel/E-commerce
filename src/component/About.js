import about from "./about.css";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function About(){


        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        };

    return(
        <div className="container">
            <br/><br/><br/><br/>
<div className="about_start">
    <div className="about_start_text">
<h2>
About Us
</h2>
<p>
<Link to="/"><i class="fa-solid fa-house"></i> Home</Link> &gt; About Us
</p>
</div>
</div>

<div className="about_photo">
<img src={require("../storeish_images/about_image.jpeg")} alt="i"/>
</div>

<div className="about_paragraph">
<h1>ABOUT US</h1>
<p>In today’s digital age, 
    e-commerce websites have revolutionized the way 
    people shop and conduct business. These platforms 
    provide a convenient and efficient way to 
    purchase products and services from the comfort 
    of one's home, offering a seamless shopping 
    experience that traditional brick-and-mortar 
    stores often cannot match. The rise of e-commerce 
    has been driven by advancements in technology, 
    including secure payment gateways, mobile 
    accessibility, and sophisticated algorithms 
    that personalize the shopping experience for 
    each user. As a result, consumers have access to 
    a global marketplace, where they can compare 
    prices, read reviews, and make informed purchasing decisions.
</p>
<p>
One of the key advantages of e-commerce websites is 
their ability to offer a diverse range of products 
and services. From everyday essentials to luxury 
goods, these platforms cater to various consumer 
needs and preferences. Businesses, both big and 
small, can reach a broader audience, transcending 
geographical boundaries and expanding their customer 
base. Additionally, e-commerce websites provide 
valuable data insights, allowing businesses to 
analyze consumer behavior, track sales trends, 
and optimize their marketing strategies. This 
data-driven approach helps companies to enhance 
their offerings and improve customer satisfaction, 
ultimately driving growth and profitability.
</p>
<p>
However, the rapid growth of e-commerce also 
presents several challenges. Cybersecurity threats, 
such as data breaches and fraud, pose significant 
risks to both consumers and businesses. Ensuring 
the security of online transactions and protecting 
sensitive information is crucial to maintaining 
consumer trust. Furthermore, the intense competition 
in the e-commerce space requires businesses to 
continuously innovate and differentiate themselves 
to stay ahead. By leveraging emerging technologies 
such as artificial intelligence and machine learning, 
e-commerce websites can enhance their user 
experience, streamline operations, and offer 
personalized recommendations. As the e-commerce 
landscape continues to evolve, businesses must 
adapt and embrace these changes to thrive in the 
digital marketplace.
</p>
</div>

<div className="about_slider">
<Slider {...settings}>

<div className="about_slider_container">
    <p>As an avid online shopper, 
        I appreciate the vast array of products available on 
        e-commerce websites. From household essentials to unique gadgets, 
        I can find everything I need with just a few clicks.</p>
    <div className="guest">
        <img src={require("../storeish_images/man1.jpg")} alt="i"/>
        <h4>Jusafe </h4>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>
</div>



    <div className="about_slider_container">
    <p>As a busy professional, 
        I find e-commerce websites incredibly convenient. 
        I can shop for groceries, clothing, and even office 
        supplies without leaving my desk. The website's intuitive 
        design and easy navigation save me valuable time</p>
    <div className="guest">
        <img src={require("../storeish_images/girl1.jpeg")} alt="i"/>
        <h4>Sofiya </h4>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>
</div>



    <div className="about_slider_container">
    <p>While I enjoy the convenience of 
        e-commerce websites, I have some concerns about security. 
        I've heard of instances where personal information and 
        payment details have been compromised, which makes me hesitant 
        to share my data online</p>
    <div className="guest">
        <img src={require("../storeish_images/man4.webp")} alt="i"/>
        <h4>Adel </h4>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>
</div>


    <div className="about_slider_container">
    <p>One of the things I love most about my favorite 
        e-commerce website is the personalized shopping 
        experience it offers. The platform's recommendation 
        engine suggests products based on my previous purchases 
        and browsing history</p>
    <div className="guest">
        <img src={require("../storeish_images/girl3.jpg")} alt="i"/>
        <h4>Jessy </h4>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>
</div>
    </Slider>
</div>

<div className="team">
<h1>Our Team <span style={{color:"darkorange"}}>Members</span></h1>
<p>Meet our dedicated team of experts who are passionate about delivering exceptional products and services.</p>
</div>

<div className="team_container">
<div className="about_team_container">
<img src={require("../storeish_images/about_team.jpg")} alt="i"/>
<h3>John Brooklyn</h3>
<h4>Developer</h4>
<div className="team_contact">
        <li><i class="fa-brands fa-facebook-f"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-x-twitter"></i></li>
    </div>
</div>
</div>

<div className="team_container">
<div className="about_team_container">
<img src={require("../storeish_images/about_team_f.jpg")} alt="i"/>
<h3>Emily smith</h3>
<h4>Developer</h4>
<div className="team_contact">
        <li><i class="fa-brands fa-facebook-f"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-x-twitter"></i></li>
    </div>
</div>
</div>
        </div>
    );
}








