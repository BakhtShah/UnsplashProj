import React from "react";
import "./NavBar.scss";
import { CiSearch } from "react-icons/ci";
const NavBar =()=>{
    
         return (<div className="NavBarContainer">
              <img src={require('../../../assets/images/unsplash.png')} alt="" />
            <form>
            <CiSearch />
            <input type="text" required />
            </form>
            <span>Advertise </span>
            <span>Blog </span>
            <span>Unsplash </span>
   
      
    </div>);
    
};

export default NavBar;