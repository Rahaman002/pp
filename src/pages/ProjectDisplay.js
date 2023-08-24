import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import { Link } from "@material-ui/core";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div style={{marginTop:"110px"}} className="project">
      <h1 > {project.name}</h1>
      <img src={project.image} alt="There is some issue" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link href={project.link} target="_blank">
         <GitHubIcon />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
