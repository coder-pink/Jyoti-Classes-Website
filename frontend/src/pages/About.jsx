const About = () => {
    return (
        <>
            <section className="section-hero">
            <div className="container grid grid-two-cols">
            <div className="hero-content">
                    <p>The Best science classes in your area</p>
                    <h1>Why Choose us</h1>
                    <p>Discover the best science classes in your area, where hands-on learning and expert instruction come together to ignite your passion for discovery. Do not miss this opportunity to enhance your knowledge and skills in a supportive and engaging environment.</p>

                    <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">Our Services</button>
                                </a>
                            </div>
                </div>
                <div className="hero-img">
                    <img src="\images\join-today.png" alt="why choose us"  width="500" height="400"/>
                </div>
                
            </div>
        </section>
        </>
    )
}


export default About