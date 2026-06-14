import heroPhoto from '../ASSETS/Site_photo.jpeg';

function Hero() {
    return (
        <header className="hero" id="home">
            <div className="hero__copy">
                <p className="section-kicker">A spring celebration</p>
                <h1>Matthew Wedding Gallery</h1>
                <p>
                    A bright, floral home for ceremony moments, portraits, reception
                    candids, and all the happy little in-between photos.
                </p>
                <a className="hero__button" href="#gallery">View Gallery</a>
            </div>
            <div className="hero__photo-wrap" aria-label="Featured wedding photo">
                <img src={heroPhoto} alt="Wedding couple laughing together" />
            </div>
        </header>
    );
}

export default Hero;
