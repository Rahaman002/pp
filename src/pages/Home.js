import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Link from "@material-ui/core/Link/Link";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Rahaman</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link href={"https://www.linkedin.com/in/abdul-rahaman-63b8081b9/"} target="_blank">
          <LinkedInIcon />
      </Link>
      <Link href={"mailto:36rahaman@gmail.com"} target="_blank">
      <EmailIcon />
      </Link>
      <Link href={"https://github.com/Rahaman002"} target="_blank">
      <GithubIcon />
      </Link>
          
          
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, ChakraUI,React-bootstrap, TailwindCSS.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
