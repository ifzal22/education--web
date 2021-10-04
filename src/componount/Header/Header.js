import React from 'react';
import MenBar from '../MenBar/MenBar';
import "./Header.css"
const Header = () => {
    return (
        <div className="banner ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            <MenBar></MenBar>
         
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
};

export default Header;