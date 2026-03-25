// App.tsx
import React from "react";  
import "./homepage.css";

const Homepage: React.FC = () => {
  return ( 
    <>
    <div className="container homepage">
       <div className="homeleft">
       <div className="mailid poppins-light-italic"> <img src="../../src/assets/images/gmail.svg"></img> <a href="mailto:rashmisanikoppa10@gmail.com">rashmisanikoppa10@gmail.com</a></div>
      <h2 className="intro">Hi there, I'm <br /> Rashmi Sanikoppa</h2>
      <h3> Web Developer</h3>
      <h4>Crafting Seamless Web Experiences</h4>
      <p>I turn ideas into interactive, responsive, and visually appealing web applications.</p>
       
    </div>
       <div className="homeright">
     <img src="../src/assets/images/profile1.jpg" alt="Rashmi Sanikoppa" className="profile-pic" /> 
    </div>
    </div>
    </> 
  );
};

export default Homepage;