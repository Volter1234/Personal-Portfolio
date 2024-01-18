import React from "react";


const year = new Date().getFullYear();
function Footer(){
    return(
        <div className="Footerdiv">
            <p>Copyright ©️ {year} Aakrit Jain</p>
        </div>
    );
}

export default Footer;