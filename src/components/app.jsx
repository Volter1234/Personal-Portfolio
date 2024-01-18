import React from "react";
import Nav from "./nav";
import Intro from "./intro";
import Skills from "./skills";
import Projects from "./projects";
import ContactMe from "./contactme";
import Footer from "./footer";

function App(){
    return(
        <div>
        <Nav/>
        <Intro/>
        <Projects/>
        <Skills/>
        <ContactMe/>
        <Footer/>
        </div>
    );
}

export default App;