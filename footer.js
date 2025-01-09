import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <>
        {/* footer starts */}

        <div className="footercontainer">

          <div id='footercontent'>

          <div id='links'>
          <div id='linkstable1'>
            <span>
              <h4 className='learnandhelp'><i>Learn -</i></h4>
            </span>
            <span>
              <h6><a href='/about'>About Us</a></h6>
            </span>
            <span>
              <h6><a href='/about'>Careers</a></h6>
            </span>
            <span>
              <h6><a href='/about'>Ingredient Library</a></h6>
            </span>
            <span>
              <h6><a href='/about'>Petals Care (News)</a></h6>
            </span>
            <span>
              <h6><a href='/about'>Store Locator</a></h6>
            </span>
          </div>

          <div id='linkstable2'>
            <span>
              <h4 className='learnandhelp'><i>Help -</i></h4>
            </span>
            <span>
              <h6><a href='/contact'>Contact Us</a></h6>
            </span>
            <span>
              <h6><a href='/about'>FAQs</a></h6>
            </span>
            <span>
              <h6><a href='/about'>Shipping & Refunds</a></h6>
            </span>
            <span>
              <h6><a href='/about'>Terms Of Service</a></h6>
            </span>
            <span>
              <h6><a href='/about'>Privacy Policy</a></h6>
            </span>
          </div>
          </div>
          

          <div id='newsletter'>
            <div id='subandp'>
	            <h2 id='sub'>Subscribe to our Newsletter</h2>
	            <p>Be the first to know about new collections and exclusive offers.</p>
            </div>
	            <form id='emailform'>
              <div><input id='email' type="text" placeholder="Enter Your Name" required/></div>
		          <div><input id='email' type="email" placeholder="Enter Your Email" required/></div>
              <div><input id='email' type="tel" maxLength="10" placeholder="Enter Your Contact No" required/></div>
			        <br/>
		          <button id='subbutton'>Subscribe</button>
	            </form>
          </div>


          <div id='iconlinks'>
          <div className='iconlinkstable' id='iconlinkstable1'>
            <span>
            <h6><a href='/about'><i class="fa-brands fa-whatsapp"></i></a></h6>
              <h6><a href='https://www.instagram.com/minemart.in/?__pwa=1'><i className="fa-brands fa-instagram"></i></a></h6>
              <h6><a href='https://www.facebook.com/Minemart.co/'><i class="fa-brands fa-facebook"></i></a></h6>
              <h6><a href='/about'><i class="fa-brands fa-x-twitter"></i></a></h6>
              <h6><a href='/about'><i class="fa-brands fa-discord"></i></a></h6>
            </span>
            <span>
              <h6><a href='/about'><i class="fa-brands fa-youtube"></i></a></h6>
              <h6><a href='/about'><i class="fa-brands fa-linkedin"></i></a></h6>
              <h6><a href='/about'><i class="fa-solid fa-envelope"></i></a></h6>
              <h6><a href='/about'><i class="fa-brands fa-threads"></i></a></h6>
              <h6><a href='/about'><i class="fa-brands fa-telegram"></i></a></h6>

            </span>
            
          </div>


          


          </div>


        </div>
          
          <hr id='footerdivider'/>
          <p id='bottominfo'>© 2024,<a href='/'> Petals Powered by Shopify</a> . Contact information</p>
          
        </div>
    </>
  )
}

export default Footer