import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container" data-aos="zoom-in" data-aos-delay="300">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in CS </h3>
                <span className="qualification__subtitle">
                  Mumbai University
                </span>
                <div className="qualification__calendar">
                   2017 - 2021
                </div>
                <div className="qualification__calendar">
                 9.1 CGPA
                </div>
              </div>
              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                Maharashtra State Board
                </span>
                <div className="qualification__calendar">
                   2016 - 2017 
                </div>
                <div className="qualification__calendar">
                 75.85 <i class="uil uil-percentage"></i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC</h3>
                <span className="qualification__subtitle">
                Maharashtra State Board
                </span>
                <div className="qualification__calendar">
                   2014 - 2015 
                </div>
                <div className="qualification__calendar">
                 93.40 <i class="uil uil-percentage"></i>
                </div>
              </div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
            </div>



          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">System Engineer</h3>
                <span className="qualification__subtitle">
                  Infosys
                </span>
                <div className="qualification__calendar">
                 Jun 2021 - Jan 2024
                </div>
              </div>
              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualification;
