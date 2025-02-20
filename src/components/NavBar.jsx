const NavBar = (props) => {
    
    // const { id, href, text } = props;
    // const arrayLinks = props.links

    return (
        <nav>
            <ul>

                {
                    props.links.map( (link) => {
                
                        const { id, href, text, current } = link;
                            return (
                                <li key={ id }  className={current ? 'active' : ''} >
                                    <a href={ href }>
                                        { text }
                                    </a>
                                </li>
                            )                  
                        }
                    )
                }
            </ul>
        </nav>
    )
}

export default NavBar;