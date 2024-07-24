
const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Best Coaching Classes for Science Stream</p>
                            <h1>Welcome to Jyoti Classes</h1>
                            <p>Unlock your full potential with the best coaching for the Science stream, where excellence meets expertise. Join Jyoti Classes today and pave your path to success</p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect now</button>
                                </a>
                                <a href="/about">
                                    <button className="btn secondary-btn">Learn more</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src="\images\student-img.png" alt="students" />
                        </div>

                    </div>

                </section>
            </main>

        {/* Second Section */}
            <section className="section-analytics">
                        <div className="container grid grid-four-cols">                            
                                <div className="div1">
                                    <h2>Coaching 1</h2>
                                    <p>About coaching 1</p>
                                </div>
                                <div className="div1">
                                    <h2>Coaching 2</h2>
                                    <p>About coaching 2</p>
                                </div>
                                <div className="div1">
                                    <h2>Coaching 3</h2>
                                    <p>About coaching 3</p>
                                </div>
                                <div className="div1">
                                    <h2>Coaching 4</h2>
                                    <p>About coaching 4</p>
                                </div>
                            </div>
            </section>

        {/* third Section */}

        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-img">
                    <img src="\images\join-today.png" alt="why choose us"  width="500" height="400"/>
                </div>
                <div className="hero-content">
                    <p>The Best science classes in your area</p>
                    <h1>Join Today</h1>
                    <p>Discover the best science classes in your area, where hands-on learning and expert instruction come together to ignite your passion for discovery. Do not miss this opportunity to enhance your knowledge and skills in a supportive and engaging environment.</p>

                    <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect now</button>
                                </a>
                                <a href="/about">
                                    <button className="btn secondary-btn">Learn more</button>
                                </a>
                            </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Home