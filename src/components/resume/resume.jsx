import React from 'react';
import resumefile from "./Sahil_Kalkal_Resume.pdf"

const PDFViewer = () => {


    return (
        <div className="resume">
            <div className="resume-box">
                <a href={resumefile}
                    download="Sahil Kalkal Resume"
                    target="_blank"
                    rel="noreferrer"
                    className="cv">
                    Download PDF
                </a>
                <p>(Links in resume/CV will work in pdf file)</p>
                <img src={require("./resume.jpg")} alt="" className="resume-img" />
            </div>
        </div>
    );
};

export default PDFViewer;
