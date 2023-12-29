import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="project-image" className="work__img" />
      <div className="work__description">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__button">
          {/* Demo <i className='bx bx-right-arrow-alt work__button-icon'></i> */}
          <a href={item.github} target="_blank" className="work__icon-link">
            {" "}
            <i
              className="bx bxl-github work__button-icon"
              style={{ color: "#757575" }}
            ></i>
          </a>
          <a href={item.link} target="_blank" className="work__icon-link">
            {" "}
            <i
              className="bx bx-link-alt work__button-icon"
              style={{ color: "#757575" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
