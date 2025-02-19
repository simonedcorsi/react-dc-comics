import comics from "../assets/img/buy-comics-digital-comics.png"
import merch from "../assets/img/buy-comics-merchandise.png"
import shop from "../assets/img/buy-comics-shop-locator.png"
import sub from "../assets/img/buy-comics-subscriptions.png"
import buy from "../assets/img/buy-dc-power-visa.svg"

function Main() {
    return (
        <main>
            <section id="comics">
                <div className="container">
                    <h2>-- Content goes here --</h2>
                </div>
            </section>
            <section id="ComicsIcons">
                <div className="container">
                    <ul>
                        <li>
                            <figure>
                                <img src={comics} alt="icon" />
                            </figure>
                            <span>DIGITAL COMICS</span>
                        </li>
                        <li>
                            <figure>
                                <img src={merch} alt="icon" />
                            </figure>
                            <span>DC MERCHANDISE</span>
                        </li>
                        <li>
                            <figure>
                                <img src={shop} alt="icon" />
                            </figure>
                            <span>SUBSCRIPTION</span>
                        </li>
                        <li>
                            <figure>
                                <img src={sub} alt="icon" />
                            </figure>
                            <span>COMIC SHOP LOCATOR</span>
                        </li>
                        <li>
                            <figure>
                                <img src={buy} alt="icon" />
                            </figure>
                            <span>DC POWER VISA</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Main;