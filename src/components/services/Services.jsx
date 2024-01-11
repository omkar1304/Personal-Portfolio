import React, { useState } from "react";
import "./service.css";

const Services = () => {

    const [ toggleState, setToggleState ] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">

        <div className="services__content" data-aos="fade-up">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Frontend <br/>Wizard</h3>
          </div>

          <span className="services__button" onClick={() => setToggleState(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Frontend Wizard</h3>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Craft captivating user interfaces that enhance user experience using React.js and Next.js
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develop responsive and visually appealing web pages using the latest frontend technologies.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Elevate your brand presence through strategic positioning within the digital landscape.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Bring designs to life by creating seamless user interactions and intuitive UX elements.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Design and deliver striking mockups and product visuals tailored to your company's identity.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content" data-aos="fade-up">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Backend <br /> Maestro</h3>
          </div>

          <span className="services__button" onClick={() => setToggleState(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">Backend Maestro</h3>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Architect robust server-side solutions using the power of Node.js and Express.js.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Ensure data integrity and efficiency through expert utilization of MongoDB for backend storage.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Develop scalable and high-performance backend systems that drive seamless functionality.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Implement RESTful APIs for smooth communication between frontend and backend components.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Foster a reliable and secure foundation for your applications with meticulous backend development.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content" data-aos="fade-up">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">DSA <br /> Alchemist</h3>
          </div>

          <span className="services__button" onClick={() => setToggleState(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">DSA Alchemist</h3>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Solve complex problems and optimize code efficiency with a deep understanding of data structures.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Implement algorithmic solutions to enhance the speed and performance of your applications.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Provide expertise in critical areas such as sorting, searching, and graph algorithms.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Conduct thorough analysis and optimization to ensure your software meets the highest standards.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Offer guidance and training on data structures and algorithms to empower your development team.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
