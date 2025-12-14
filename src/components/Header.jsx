const Header = ({ headerLogo, listLinks }) => {
    return (
        <header className="header">
            <div className="container header__nav">
                <a href="#" className="header__nav-logo">{headerLogo}</a>
                <ul className="header__nav-list">
                    {listLinks?.map((item) => (
                        <li key={item.id}>
                            <a href="#" className="header__nav-list_link">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header
