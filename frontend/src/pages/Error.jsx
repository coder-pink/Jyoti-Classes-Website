const Error = () => {
    return (
        <>
        <section className="errorPage">
            <div className="container content">
                <h1 className="header">404</h1>
                <h3>Page Not Found</h3>
                <p>Oops! The page you are looking for does not exist.</p>

                        <div className="btn btn-group">
                                <a href="/">
                                    <button className="btn">Return Home</button>
                                </a>
                                <a href="/contact">
                                    <button className="btn secondary-btn">Report Problem</button>
                                </a>
                            </div>
            </div>
            

        </section>
        </>
    )
}

export default Error