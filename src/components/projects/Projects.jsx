import React from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";

const Projects = () => {
  return (
    <div>
      <div className="work__conatiner container grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default Projects;
