// import React, { useState } from 'react';
// import "./Footer.css";

// function Footer() {
//     const [state, setState] = useState(false);
//     let url = "";
//   return (
//     <div className='footer'>

//         <div className="box">
//             <div class="box-container">
//             <div>
//                 <h3> GroceryHub <i class="fas fa-carrot"></i> </h3>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, iste.</p>
//                 <div class="share">
//                     <a href={url} class="fab fa-facebook-f"></a>
//                     <a href={url} class="fab fa-twitter"></a>
//                     <a href={url} class="fab fa-instagram"></a>
//                     <a href={url} class="fab fa-linkedin"></a>
//                 </div>
//             </div>

//             <div className="box">
//                 <h3>contact info</h3>
//                 <a href={url} class="links"> <i class="fas fa-phone"></i> +123-456-7890 </a>
//                 <a href={url} class="links"> <i class="fas fa-phone"></i> +111-455-3333 </a>
//                 <a href={url} class="links" > <i class="fas fa-envelope"></i> help.groceryhub@gmail.com </a>
//                 <a href={url} class="links"> <i class="fas fa-map-marker-alt"></i> mumbai, india - 400104 </a>

//             </div>

//             <div className="box">
//                 <h3>quick links</h3>
//                 <a href={url} class="links"> <i class="fas fa-arrow-right"></i> home </a>
//                 <a href={url} class="links"> <i class="fas fa-arrow-right"></i> features </a>
//                 <a href={url} class="links"> <i class="fas fa-arrow-right"></i> products </a>
//                 <a href={url} class="links"> <i class="fas fa-arrow-right"></i> categories </a>
//                 <a href={url} class="links"> <i class="fas fa-arrow-right"></i> review </a>
//                 <a href={url} class="links"> <i class="fas fa-arrow-right"></i> blogs </a>
//             </div>

//             <div className="box">
//                 <h3>newsletter</h3>
//                 <p>subscribe for latest updates</p>
//                 <input type="email" placeholder="your email" class="email"/>
//                 <input type="submit" value="subscribe" class="btn"/>
//                 <img src="image/payment_final-removebg-preview.png" class="payment-img" alt=""/>
//             </div>

//             </div>

//         </div>
//    </div> 

//   )

  

// }

// export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;