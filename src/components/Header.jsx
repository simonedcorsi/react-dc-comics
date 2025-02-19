import logo from '../assets/img/dc-logo.png';


function Header() {
    return (
        <header>
            <div className="container">
                <figure>
                    <a href="#">
                        <img src={ logo } alt="Logo" />
                    </a>
                </figure>
                <nav>
                    <ul>
                        <li className="active"><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;