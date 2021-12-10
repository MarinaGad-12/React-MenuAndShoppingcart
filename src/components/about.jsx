import React from "react";
import { Link, Route } from "react-router-dom";
import AboutCompany from "./about-company";
import AboutTeam from "./about-team";

const About = (props) => {
  return (
    <>
      <div className="row m-3">
        <div className="col-3 d-flex flex-column">
          <Link to="/about/team">About Team</Link>
          <Link to="/about/company">About Compay</Link>
        </div>
        <div className="col">
          <Route path="/about/team" component={AboutTeam} />
          <Route path="/about/company" component={AboutCompany} />
        </div>
      </div>
    </>
  );
};

export default About;
