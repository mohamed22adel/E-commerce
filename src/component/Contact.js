import contact from "./contact.css";
import { Link } from "react-router-dom";
export default function Contact(){
    return(
        <div className="container">

<br/><br/><br/><br/>
<div className="contact_start">
    <div className="contact_start_text">
<h2>
Contact Us
</h2>
<p>
<Link to="/"><i class="fa-solid fa-house"></i> Home</Link> &gt; Contact Us
</p>
</div>
</div>

<div className="contact_paragraph">
<h1>Let's build something exciting together</h1>
<p>
    We're here to turn your ideas into reality.
    Join us on this journey, and together, we'll create
    something truly remarkable. Let's make magic happen!
</p>
</div>

<div className="contact_social">
<div>
<p><i class="fa-solid fa-paper-plane"></i></p>
<p>Storeish@gmail.com</p>
</div>
<div>
<p><i class="fa-solid fa-phone-volume"></i></p>
<p>+20 1134 764 9851</p>
</div>
<div>
    <p><i class="fa-solid fa-house"></i></p>
    <p>70 Washington Square South,New York,
        NY 10013, United States.
    </p>
</div>
</div>

<div className="contact_form">
<h2>Get A Free Quote</h2>
<p>Let us help you bring your vision to life. Contact
    us today to receive a free, no-obligation Quote
    tailored to your needs.
</p>

<form>
    <label>Your Name</label>
    <input type="text" required/>

    <label>Email Address</label>
    <input type="email" required/>

    <label>Project Brief</label>
    <input className="Project_Brief" type="text" required/>

    <button type="submit">Send</button>
</form>
</div>

<div className="contact_map">
    <iframe width="100%" height="400" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20York%20Universety+(Storeish)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
</div>
        </div>
    );
}