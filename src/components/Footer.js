import "./FooterStyles.css"

const Footer  = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Auto Resume Maker</h1>
                    <p>Change the way you approach your next Resume Search.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">Contributions</a>
                    <a href="/">Documentation</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Projects</a>
                    <a href="/">Discord</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Contact Us</a>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Customer Support</a>
                </div>
                <div>
                    <h4>Projects</h4>
                    <a href="/">Terms Of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;