// Sidebar.tsx
import React from "react"; 
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

type MenuItem = {
  id: number;
  label: string;
   path: string;
};

const menuItems: MenuItem[] = [
   { id: 1, label: "Home ", path: "/HomePage" },
 { id: 2, label: "About", path: "/About" }, 
  { id: 3, label: "Blogs", path: "/Blogs" },
];


const Sidebar: React.FC = () => { 

  return (
    <div className="sidebar poppins-black"> 
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/rashmi-sanikoppa-a83918304/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/rashmisanikoppa" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" className="social-icon" />
          </a>
        </li>
      </ul>
  
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path} className={({isActive}) => (isActive ? "active" : "")}> {item.label}</NavLink>
           </li>
        ))}
      </ul>
    </div>
  );
         
};

export default Sidebar;