import React from "react";


function Intro(){
    return(
        <div className="introComp">
        <div className="introText">
            <h1>Hi I'm Aakrit</h1>
            <h2>I love to do Web Development</h2>
            <a href="#contact">
            <button type="button" class="btn btn-outline-warning">Let's Connect</button>
            </a>
        </div>
            <img className="softwarePic" src="software-engineer.svg" alt="pic"/>
        </div>
    );
}

export default Intro;