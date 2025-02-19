import fb from "../assets/img/footer-facebook.png"
import peri from "../assets/img/footer-periscope.png"
import pint from "../assets/img/footer-pinterest.png"
import tw from "../assets/img/footer-twitter.png"
import yt from "../assets/img/footer-youtube.png"

function Footer() {
    return (
        <footer>
            
            <section id="topFooter">
                <div className="container bg-logo">

                    <div>
                        <ul>
                            <li><a className="title" href="#">DC COMICS</a></li>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Tv</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                        <ul>
                            <li><a className="title" href="#">SHOP</a></li>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><a className="title" href="#">DC</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Adversiting</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificate</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><a className="title" href="#">SITES</a></li>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazines</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>

                </div>        
            </section>
            <section id="bottomFooter">
                <div className="container">
                    <button>
                        SING-UP NOW!
                    </button>
                    <div className="social">
                        <span>FOLLOW US</span>
                        <figure>
                            <img src={fb} alt="fb" />
                        </figure>
                        <figure>
                            <img src={peri} alt="peri" />
                        </figure>
                        <figure>
                            <img src={pint} alt="pint" />
                        </figure>
                        <figure>
                            <img src={tw} alt="tw" />
                        </figure>
                        <figure>
                            <img src={yt} alt="yt" />
                        </figure>
                    </div>
                </div>      
             </section>
        </footer>
    );
}

export default Footer;