import React from "react";
import { NavLink } from "react-router-dom";
function Dropdown(props) {
  return (
    <React.Fragment>
      <NavLink activeClassName="active" to="/home">
        <div className="navs">Mavzu</div>
      </NavLink>
      <NavLink to="/education" activeClassName="active">
        <div className="navs">Axborot xavfsizlik xavfi </div>
      </NavLink>
      <NavLink to="/certifications" activeClassName="active">
        {/* <div className="navs">Certifications</div> */}
      </NavLink>
      <NavLink to="/projects" activeClassName="active">
        <div className="navs">
          Xavfsizlik buzilganini aniqlovchi dastur turlari
        </div>
      </NavLink>
      <NavLink to="/about-me" activeClassName="active">
        <div className="navs"> hech narsa yu</div>
        
      </NavLink>
    </React.Fragment>
  );
}
export default Dropdown;
