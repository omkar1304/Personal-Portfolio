import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/omkar_pedamkar13"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-down"
      >
        <i class="uil uil-instagram-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/omkar-pedamkar/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/omkar1304"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
