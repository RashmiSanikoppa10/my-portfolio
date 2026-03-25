// Sidebar.tsx
import React from "react";  
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./Blogs.css";

const Blogs: React.FC = () => {
  return ( 
    <div className="blogs">
        <h2>Work in Progress..... </h2>
        <Box sx={{ width: "60%" }}>
      <LinearProgress />
    </Box>
       
    </div> 
    
  );
};

export default Blogs;