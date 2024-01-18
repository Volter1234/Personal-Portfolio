import React from "react";

function Nav(){
    return(
      <section className="Navigation fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Aakrit</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link one" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link one" href="#project">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link one" href="#skill">Skills</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link two" href="#contact">Let's Connect</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>
    )
}

export default Nav;