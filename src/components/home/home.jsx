import { Link } from "react-router-dom"
import "../../App.scss"
import codingImg from "./himg.jpg"
import projects from "../projects/project.json"

function Home({ theme }) {
    return (
        <div className="home">
            <div className="home-box">
                <div className="home-box-left">
                    <p className={`head head-${theme}`}>
                        Hey, I am Sahil
                    </p>
                    <p className="head-text">
                        I am a <span className="highlight">web developer</span> who loves to build creative templates and efficient algorithms.
                    </p>
                    <p className="head-text">
                        Welcome to my digital garden, here you can check out all <Link className="head-text-link" to='/projects' >my projects </Link>and <Link className="head-text-link" to='/about-me' >about me </Link>.
                    </p>

                    {/* <div className="socials">
                        <img src={require("./github.png")} alt="" className="social-img" />
                        <img src={require("./linkedin.png")} alt="" className="social-img" />
                        <img src={require("./mail.png")} alt="" className="social-img" />
                    </div> */}

                    <div className="home-buttons">
                        <Link to='/resume'>
                            <button className="home-button">
                                Resume / CV
                            </button>
                        </Link>
                        <button className="home-button hireme">
                            Hire Me
                        </button>
                    </div>





                </div>
                <img src={codingImg} alt="" className="home-img" />
            </div>

            <div className="home-projects-box">
                <div className="phead">
                    <p className="sub-head">
                        Projects
                    </p>
                    <Link to='/projects'>
                        <button className="allpro">
                            All Projects
                        </button>
                    </Link>
                </div>

                <div className="home-projects">
                    {
                        projects.slice(0, 4).map((p) => (
                            <div className="project" key={p.name}>
                                <div className="phead">
                                    <p className="project-year">
                                        {p.year}
                                    </p>
                                    <p className="ptype">
                                        {p.type}
                                    </p>
                                </div>
                                <p className="project-name">
                                    {p.name}
                                </p>
                                <p className="project-desc">
                                    {p.desc}
                                </p>

                                <div className="project-buttons">
                                    <div className="demo-box">
                                        <a href={p.demo} target="blank" className="project-button">
                                            Demo
                                        </a>
                                        <img src={require("../projects/share.png")} alt="" className="share" />
                                    </div>
                                    <div className="demo-box">
                                        <a href={p.code} target="blank" className="project-button">
                                            Source
                                        </a>
                                        <img src={require("../projects/share.png")} alt="" className="share" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Home