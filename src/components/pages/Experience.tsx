import React from "react"; 
import "./About.css"

const Experience: React.FC = () => {
  return (
    <div className="experience" > 
    <div className="experience-item"> <h3>LTI Mindtree Limited	<span>Oct 2018 – Oct 2023</span> </h3>
        <h4>
Senior Software Engineer - Bengaluru, India
</h4> 
      <ul>
        <li>Built reusable React components that reduced development time for new features by 30%.</li>
        <li>Integrated REST APIs with React and Redux, enabling dynamic product listings and improving page load performance.</li>
        <li>Fetched and managed dynamic content from Contentful CMS using GraphQL, enabling real-time content updates and reducing manual content deployment effort by ~40%.</li>
        <li>Worked in Agile/Scrum teams, participating in sprint planning and code reviews, helping deliver releases ~20% faster.</li>
        <li>Supported testing and QA activities using Jest and React Testing Library, improving frontend code reliability and reducing UI regression issues by ~25%.</li>
      </ul></div>
    <div className="experience-item"> <h3> Kloud9 Retail	<span>  Feb 2018 – Aug 2018 </span> </h3>
          <h4>
Interactive Developer -	Bengaluru, India
</h4>
      <ul>
        <li>Implemented semantic and accessible web pages using HTML5 and CSS3, improving page structure and SEO performance by ~15–20%.</li>
        <li>Developed product listing, product detail, and checkout UI components for high-traffic e-commerce platforms, improving user navigation efficiency by ~20%.</li>
        <li>Adhering to Agile/Scrum methodologies for efficient and collaborative development.</li>
           </ul></div>
    <div className="experience-item"> <h3>Echidna Pvt. Ltd.	<span>Apr 2016 – Apr 2017 </span> </h3>
           <h4>
Associate Interactive Developer -	Bengaluru, India
</h4>
      <ul>
        <li>Implemented mobile-first responsive layouts using Bootstrap, Flexbox, and media queries, ensuring consistent UI across multiple screen sizes</li>
        <li>Collaborated with designers and backend developers to implement UI features with ~95% design accuracy.</li>
          </ul></div>
    <div className="experience-item"> <h3>Hexwhale Technologies Pvt. Ltd.	<span>Sep 2014– Mar 2016 </span> </h3>
          <h4>
Software Engineer -	Bengaluru, India
</h4>
      <ul>
        <li>Developed responsive, pixel-perfect web pages from PSD UI/UX designs using HTML5, CSS3, and Bootstrap, improving mobile user experience by ~25% .</li>
        <li>Ensured cross-browser compatibility across major browsers, reducing UI issues reported by QA by ~30%.</li>
          </ul></div> 
    </div>
  );
};
export default Experience;