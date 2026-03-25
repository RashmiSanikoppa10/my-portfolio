// App.tsx
import React from "react";
import Sidebar from "./components/pages/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";  
import Homepage from "./components/Homepage";  
import About from "./components/pages/About";
import Blogs from "./components/pages/Blogs"

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/Homepage" element={<Homepage />} />
         <Route path="/About" element={<About />} />  
         <Route path="/Blogs" element={<Blogs />} />  
      </Routes>
    </AnimatePresence>
  );
}

const App: React.FC = () => { 
  return (
     <BrowserRouter>
       <Sidebar />
      <AppRoutes />
    </BrowserRouter>
    // <div>
    //   <Sidebar />
    //   <div className="content">
    //     <Homepage />
    //   </div>
    // </div>
  );
};

export default App;