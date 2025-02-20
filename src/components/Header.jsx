import logo from '../assets/img/dc-logo.png';
import NavBar from './NavBar';


const navLinks = [
    { id: 1, href: '#', text: 'Characters', current: false },
    { id: 2, href: '#', text: 'Comics', current: true },
    { id: 3, href: '#', text: 'Movies', current: false },
    { id: 4, href: '#', text: 'TV', current: false },
    { id: 5, href: '#', text: 'Games', current: false },
    { id: 6, href: '#', text: 'Collectibles', current: false },
    { id: 7, href: '#', text: 'Videos', current: false },
    { id: 8, href: '#', text: 'Fans', current: false },
    { id: 9, href: '#', text: 'News', current: false },
    { id: 10, href: '#', text: 'Shop', current: false },
  ]

function Header() {
    return (
        <header>
            <div className="container flex-beetween">
                <figure>
                    <a href="#">
                        <img src={ logo } alt="Logo" />
                    </a>
                </figure>
                <NavBar links={ navLinks } />
            </div>
        </header>
    );
}

export default Header;