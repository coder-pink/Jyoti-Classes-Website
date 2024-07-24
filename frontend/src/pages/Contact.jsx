import { useState } from "react"


const Contact = () => {

  const [contact, setContact] = useState({
    username : "",
    email : "",
    message : ""
  })

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.PreventDefault()
}
    return (
        <>
        <section className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required autoComplete="off" placeholder="Username" value={contact.username}  onChange={handleInput}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required autoComplete="off" placeholder="Email" value={contact.email} onChange={handleInput}/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required autoComplete="off" placeholder="Your Message" value={contact.message} onChange={handleInput}></textarea>
        </div>
        <button type="submit" className="btn btn-submit">Submit</button>
      </form>
    </section>
        </>
    )
}

export default Contact