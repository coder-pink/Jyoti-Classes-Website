import {useState} from "react"

const Register = () => {
    const [user, setUser] = useState({
        username : "",
        email : "",
        phone : "",
        password : ""
    })

    //handle input 
    const handleInput = (e) => {
        let name = e.target.name; 
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value

        })
    }

    const handleSubmit = (e) => {
        e.PreventDefault()
    }

    return (
        <>
            <section>
                <main>
                    <div className="registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="\images\sign-up-img.png" alt="doing registration" width="500" height="500" />
                            </div>

                            {/* registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Registration Form</h1>
                                <br />

                                <form onSubmit={handleSubmit}> 
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" placeholder="Enter your username" id="username" required autoComplete="off" value={user.username} onChange={handleInput} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" placeholder="Enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" name="phone" placeholder="Enter your Phone number" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" placeholder="Enter your Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>        
        </>
    )
}

export default Register