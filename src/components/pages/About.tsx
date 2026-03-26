// App.tsx
import React, { useState } from "react";  
import { Tabs, Tab } from "@mui/material";
import "../style.css";
import "./About.css"; 
import Experience from "./Experience"; 
import Skills from "./Skills";  

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
  direction: "left" | "right";
}
function TabPanel({ children, value, index, direction }: TabPanelProps) {
  return (
    <div
      className={`tab-panel ${
        value === index ? "active" : ""
      } slide-${direction}`}
    >
      {value === index && children}
    </div>
  );
}

const About: React.FC = () => { 
      const [value, setValue] = useState(0);
        const [direction, setDirection] = useState<"left">("left" );
      
        const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
          setDirection(newValue > value ? "left" : "left");
          setValue(newValue);
        };
      
  return ( 
    <>
    <div className="container about poppins-light"> 
       
       <div className="left-panel">
        <div className="mailid poppins-regular-italic"> <img src="/images/gmail.svg"></img> <a href="mailto:rashmisanikoppa10@gmail.com">rashmisanikoppa10@gmail.com</a></div>
          <div className="profile-pic-container">
              <img src="/images/profile1.jpg" alt="Rashmi Sanikoppa"  />
          </div>
          <h2 className="intro"> I'm  Rashmi Sanikoppa</h2>
          <h3> Web Developer</h3> 
          <p>I turn ideas into interactive, responsive, and visually appealing web applications.</p> 
      </div>
       <div className="right-panel">
       <Tabs
        value={value}
        onChange={handleChange}
         slotProps={{
    indicator: { style: { display: "none" } }
  }}
      >
        <Tab label="ABOUT ME" className="tab" />
        <Tab label="EXPERIENCE" className="tab" />
        <Tab label="SKILLS" className="tab" />
      </Tabs>

      <div className="content-box">
        <TabPanel value={value} index={0} direction={direction}>
          <div><p>    My Journey in tech started with a curiosity for how websites work, and over the years, it turned into a passion for building intuitive and engaging user interfaces. With 8+ years of experience in frontend development, I’ve had the opportunity to work on E-Commerce applications that impact real users.</p>
          {/* <br /><p>  I have a strong background in building high-quality, scalable web applications using JavaScript, TypeScript, ReactJS & VueJs.</p> */}
          <br /> <p>Throughout my career, I have delivered Pixel-Perfect, user-focused interfaces using HTML5, CSS3 & Javascript. My experience includes working closely with UX and design teams to translate complex requirements into intuitive and engaging digital experiences. I also take part in maintaining CI/CD pipeline for Deployment.</p> 
          <br /><p>In my recent projects, I’ve been working extensively with React, TypeScript, and Tailwind CSS, building modern, scalable, and responsive applications, with around 2 years of hands-on experience in these technologies.</p>
         <br /><p>After taking some time off to focus on my family, I’m now back in tech, excited to build, learn, and grow. I enjoy crafting clean UI, solving real-world problems, and continuously improving my skills.</p>
         <br /> <p>I am comfortable collaborating with cross-functional stakeholders and have contributed to CMS-driven and e-commerce platforms like Shopify, WordPress & Magento. I also bring working knowledge of accessibility best practices, semantic HTML, and modern front-end architectures, with exposure to data visualisation and animation libraries.</p>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1} direction={direction}>
          <Experience />
        </TabPanel>

        <TabPanel value={value} index={2} direction={direction}>
        <Skills />
        </TabPanel>
      </div>
      </div> 
      
    </div>
    </> 
  );
};

export default About;