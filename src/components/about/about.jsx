import "../../App.scss"

function About() {
    return (
        <div className="about">
            <div className="about-box">
                <p className="page-head">
                    About
                </p>
                <div className="about-desc">

                    <p className="about-text" >
                        <span className="list-update">
                            (Updated on 10 November 2024)
                        </span><br />
                        Hello, I am Sahil Kalkal from India. At present, I live in New Delhi, india. I am a web developer, with a experience of 4 years in the field of web development. I am very much passionate towards my work and always open to gain new skills.
                        <br />
                        I started web development in 2019. I have built so many websites for different purposes.


                    </p>

                    <div className="contact-sec">
                        <p className="about-sub-head">
                            Contact
                        </p>
                        <div className="contact-opts">
                            <p className="contact-opt">
                                1. Email : <a href="mailto:sahilkalkal108@gmail.com" className="linkto">sahilkalkal108@gmail.com</a>
                            </p>
                            <p className="contact-opt ">
                                2.  <span className="linkto">
                                    LinkedIn
                                </span>
                            </p>
                            <p className="contact-opt ">
                                3. <span className="linkto" >
                                    GitHub
                                </span>
                            </p>

                        </div>
                    </div>

                    <div className="doing-sec">
                        <p className="about-sub-head">
                            What I'm doing now
                        </p>


                        <ul className="ulist" >
                            <li className="doing-list-data">Freelancing</li>
                            <li className="doing-list-data">Learning Front End in detail</li>
                            <li className="doing-list-data">Learning Node.js</li>
                            <li className="doing-list-data">Preparing for GATE</li>
                            <li className="doing-list-data">Learning the concepts of Designing</li>

                        </ul>

                    </div>

                    <div className="contact-sec">
                        <p className="about-sub-head">
                            Softwares I use
                        </p>
                        <ul className="ulist">
                            <li className="doing-list-data">
                                <span className="list-head">
                                    Coding :
                                </span> <span>

                                </span>
                                Visual Studio Code
                            </li>
                            <li className="doing-list-data">
                                <span className="list-head">
                                    Clients :
                                </span> <span>

                                </span>
                                Google Maps
                            </li>
                        </ul>
                    </div>
                    <div className="contact-sec">
                        <p className="about-sub-head">
                            Hardwares I use
                        </p>
                        <ul className="ulist">
                            <li className="doing-list-data">
                                <span className="list-head">
                                    Machine :
                                </span> <span>

                                </span>
                                Asus TUF Gaming FX505DY
                            </li>
                            <li className="doing-list-data">
                                <span className="list-head">
                                    CPU :
                                </span> <span>

                                </span>
                                AMD Ryzen 5 3550H
                            </li>
                            <li className="doing-list-data">
                                <span className="list-head">
                                    GPU :
                                </span> <span>

                                </span>
                                AMD Radeon Vega 8
                            </li>
                            <li className="doing-list-data">
                                <span className="list-head">
                                    Storage :
                                </span> <span>

                                </span>
                                SSD NVMe M.2 512 GB
                            </li>
                            <li className="doing-list-data">
                                <span className="list-head">
                                    Monitor :
                                </span> <span>

                                </span>
                                Viewsonic 22" LCD Monitor
                            </li>
                            <li className="doing-list-data">
                                <span className="list-head">
                                    Keyboard :
                                </span> <span>

                                </span>
                                Portronics Bubble 2.0 Wireless Keyboard
                            </li>
                            <li className="doing-list-data">
                                <span className="list-head">
                                    Mouse :
                                </span> <span>

                                </span>
                                TAG Gamerz WM800 Wireless Mouse
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About