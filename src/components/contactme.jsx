
import React from "react";

function ContactMe(){
    return(
        <div className="row Contactdiv">
        <h3 id="contact">Contact Me</h3>
        <hr/>
        <div className="Contactus col-md-6">
        <div className="row">
        <div className="col-md-4 firstRow NameTag">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name*"/>
        </div>
        <div className="col-md-4 firstRow">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email*"/>
        </div>
        </div>
        <div className="col-md-9.5 subjectTag">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
        </div>
            <div className="MessageTag">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>
            <div className="ButtonSubmit">
            <button type="button" class="btn btn-warning btn-lg">Submit</button>
            </div>
        </div>
        <div className="AboutMe col-md-6">
        <h3>Aakrit Jain</h3>
        <p>Web Developer</p>
        <br/>
        <h4>Phone</h4>
        <p>8368298851</p>
        <br/>
        <h4>Email</h4>
        <p>aakritjenn@gmail.com</p>
        </div>
        </div>
        
    );
}

export default ContactMe;