function Navbar() {
    return (
        <nav className="navbar" aria-label="Wedding gallery navigation">
            <a className="navbar__brand" href="#home">
                <span className="navbar__mark" aria-hidden="true">M</span>
                <span>
                    <strong>Matthew Wedding</strong>
                    <small>Spring Gallery</small>
                </span>
            </a>
            <div className="navbar__links">
                <a href="#gallery">Gallery</a>
                <a href="#rehearsal">Rehearsal</a>
                <a href="#story">Story</a>
                <a href="#details">Details</a>
            </div>
        </nav>
    );
}

export default Navbar;
