import { useState } from "react";

const Login = () => {
        const [user, setUser] = useState({
            email : "",
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
                    <div className="login">
                        <div className="container grid grid-two-cols">
                            <div className="login-image">
                                <img src="\images\login.png" alt="doing login" width="500" height="500" />
                            </div>

                            {/* login form */}
                            <div className="login-form">
                                <h1 className="main-heading mb-3">Login Form</h1>
                                <br />

                                <form onSubmit={handleSubmit}> 

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" placeholder="Enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" placeholder="Enter your Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>   
        </>
    )
}

export default Login