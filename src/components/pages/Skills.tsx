import React from "react";  
import { Box, LinearProgress } from "@mui/material";
import type { LinearProgressProps } from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import "./About.css";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const Skills: React.FC = () => {
  return (
    <div className="skills">  
    <div className="skills-list">
        <Box sx={{ width: '100%' }} className="progressbarblue"> 
              <div className="progressbarSkill">
                  <img src="../public/images/html5.svg"></img> 
                  <div>
                      <h4>HTML5 </h4>
                      <LinearProgressWithLabel value={95}  />
                  </div>
              </div> 
       </Box>
       <Box sx={{ width: '100%' }} className="progressbarblue"> 
              <div className="progressbarSkill">
                    <img src="../public/images/css3.svg"></img>
                    <div>
                      <h4>CSS3 </h4> 
                      <LinearProgressWithLabel value={90}  />
                    </div>
              </div> 
      </Box>
       <Box sx={{ width: '100%' }} className="progressbarblue "> 
              <div className="progressbarSkill">
                  <img src="../public/images/javascript.svg"></img> 
                  <div>
                      <h4>Javascript </h4>
                      <LinearProgressWithLabel value={80}  />
                  </div>
              </div> 
      </Box>
       <Box sx={{ width: '100%' }} className="progressbarblue "> 
                 <div className="progressbarSkill">
                      <img src="../public/images/react.svg"></img>  
                      <div>
                          <h4>React </h4>
                          <LinearProgressWithLabel value={75}  />
                      </div>
              </div> 
      </Box>
       <Box sx={{ width: '100%' }} className="progressbarblue"> 
             <div className="progressbarSkill">
                  <img src="../public/images/typescript.svg"></img> 
                  <div>
                    <h4>Typescript</h4>
                    <LinearProgressWithLabel value={80}  />
                  </div>
              </div> 
      </Box>
       <Box sx={{ width: '100%' }} className="progressbarblue"> 
              <div className="progressbarSkill">
                  <img src="../public/images/tailwindcss.svg"></img>  
                  <div>
                    <h4>TailwindCSS </h4>
                    <LinearProgressWithLabel value={90}  />
                  </div>
              </div> 
      </Box>  
      <Box sx={{ width: '100%' }} className="progressbarblue"> 
              <div className="progressbarSkill">
                  <img src="../public/images/redux.svg"></img>  
                  <div>
                    <h4>Redux </h4>
                    <LinearProgressWithLabel value={70}  />
                  </div>
              </div> 
      </Box> 
    </div>
    </div>
  );
};
export default Skills;