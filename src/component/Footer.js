import footer from "./footer.css";
export default function Footer(){
    return(
        <div className="container">
<div className="footer">
    <div className="footer_name"><h1>STOREISH</h1></div>
    <div className="footer_p">
        <p>
            We're here to support you every step of the way in your shopping journey.  
            We strive to provide the best service possible to ensure your complete satisfaction with every purchase. 
            Thank you for choosing our online store!
        </p>
    </div>
    <div className="footer_address">
        <div><i class="fa-solid fa-location-dot"></i> <p>Ohio St.South Gate,CA 90280</p></div>
        <div><i class="fa-regular fa-envelope"></i><p> Storeish@gmail.com</p></div>
        <div><i class="fa-brands fa-whatsapp"></i><p> +20 1134 764 9851</p></div>
    </div>
    <div className="footer_product">
    <div>
        Products
        <ul style={{listStyleType:"none"}}>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
    </div>
    <div>
        Company
        <ul style={{listStyleType:"none"}}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Team</li>
        </ul>
    </div>
    <div>
        Online Shop
        <ul style={{listStyleType:"none"}}>
            <li>Watch</li>
            <li>Bags</li>
            <li>Shoes</li>
            <li>Mens' fashion </li>
            <li>Women's fashion</li>
        </ul>
    </div>
    </div>

    <div className="footer_contact">
        <li style={{listStyleType:"none"}}><i class="fa-brands fa-facebook-f"></i></li>
        <li style={{listStyleType:"none"}}><i class="fa-brands fa-instagram"></i></li>
        <li style={{listStyleType:"none"}}><i class="fa-brands fa-linkedin"></i></li>
        <li style={{listStyleType:"none"}}><i class="fa-brands fa-x-twitter"></i></li>
    </div>
<div className="footer_copyright">
    <i style={{position:"relative",top:"4px"}} class="fa-regular fa-copyright"></i><p>2024.Storeish.All rights reserved.</p>
</div>
</div>
        </div>
    );
}