import React from "react";

function Skills(){
    return(
        <div>
        <div id="skill">
        <h2 className="headSkill">Skills</h2>
        <hr/>
        </div>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
            <div className="progressStat">
            <p className="skillName">HTML</p>
            <div class="progress" >
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "80%"}}  aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
            </div>
            <div className="progressStat">
            <p className="skillName">CSS</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "60%"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
            </div>
            <div className="progressStat">
            <p className="skillName">Bootstrap 5</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "50%"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            </div>
            <div className="progressStat">
            <p className="skillName">Javascript</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "50%"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="progressStat">
            <p className="skillName">Node Js</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "40%"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
            </div>
            <div className="progressStat">
            <p className="skillName">Express</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "30%"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
            </div>
            </div>
            <div className="progressStat">
            <p className="skillName">PostgreSQL</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "40%"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
            </div>
            <div className="progressStat">
            <p className="skillName">React Js</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "20%"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">20%</div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Skills;