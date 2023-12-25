import React from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Projects = () => {
  return (
    <div>
      <div className="work__conatiner containe grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
