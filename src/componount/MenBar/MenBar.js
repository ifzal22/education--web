import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg"
import "./MenBer.css"

const MenBar = () => {
    return (
        <div className="MenuBar">
        <div className="">
        
           
            <div className="col-md-10  d-flex top">

{/* TITLE  */}
            <div className="container1 ">
  <div class="shadows"><span>A</span><span>R</span><span>A</span>
  <span>B</span><span>I</span><span>A</span><span>N</span> 
  <p className="title">EDUCATION'S</p> </div>
</div>

{/* NAVbER  */}
              <div className="menu-container d-flex navbar ">

                    <div className="logo-img">
                <img className="w-75" src={logo} alt="" />
              </div>
               <div className="d-flex navLI">
               <ul className="align-items-end justify-content-end">
                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="service" className="items">
                    <li>Service</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About us</li>
                  </Link>
                  <Link to="contact" className="items">
                    <li>Contact us</li>
                  </Link>
                </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
    
    );
};

export default MenBar;