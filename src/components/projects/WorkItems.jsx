import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}  data-aos="zoom-in" data-aos-delay="50">
      <img src={item.image} alt="Project title" className="work__img" />
      <div className="work__description">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__button">
          {/* Demo <i className='bx bx-right-arrow-alt work__button-icon'></i> */}
          <a href={item.github} target="_blank" rel="noreferrer" className="work__icon-link">
            {" "}
            <i
              className="bx bxl-github work__button-icon"
              style={{ color: "#757575" }}
            ></i>
          </a>
          <a href={item.link} target="_blank" rel="noreferrer" className="work__icon-link">
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
