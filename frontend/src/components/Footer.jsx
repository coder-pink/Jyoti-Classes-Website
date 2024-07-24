import './Footer.css'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <p>&copy; 2024 Jyoti Classes. All rights reserved.</p>
            <p>
                Contact us at: <a href="mailto:info@jyoticlasses.com">info@jyoticlasses.com</a> | Phone: (123) 456-7890
            </p>
            {/* <p>
                Follow us on social media: 
                <a href="https://facebook.com/yourscienceacademy" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://twitter.com/yourscienceacademy" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://instagram.com/yourscienceacademy" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p> */}
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </p>
        </footer>
        </>
    )
}


export default Footer