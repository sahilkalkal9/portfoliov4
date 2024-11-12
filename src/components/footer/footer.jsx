import "../../App.scss"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-box">
                <img src={require("../nav/logo.png")} alt="Logo" className="fimg" />
                <div className="footer-socials">
                    <div className="fsocial">
                        <img src={require("./linkedin.png")} alt="LinkedIn" className="fsimg" />
                        <p className="fstext">
                            LinkedIn
                        </p>
                    </div>
                    <div className="fsocial">
                        <img src={require("./github.png")} alt="LinkedIn" className="fsimg" />
                        <p className="fstext">
                            GitHub
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer