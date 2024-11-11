import "../../App.scss"
import projects from "./project.json"

function Projects() {
    return (
        <div className="projects">
            <p className="page-head">
                Projects
            </p>
            <div className="projects-box">
                {
                    projects.map((p) => (
                        <div className="project">
                            <div className="project-upper">
                                {/* <img src={require(`./${p.image}`)} alt="" className="pimg" /> */}
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
                                <div className="tags">
                                    {
                                        p.tags.map((pt) => (
                                            <p className="tag">
                                                {pt}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="project-buttons">
                                <div className="demo-box">
                                    <a href={p.demo} target="blank" className="project-button">
                                        Demo
                                    </a>
                                    <img src={require("./share.png")} alt="" className="share" />
                                </div>
                                <div className="demo-box">
                                    <a href={p.code} target="blank" className="project-button">
                                        Source
                                    </a>
                                    <img src={require("./share.png")} alt="" className="share" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects