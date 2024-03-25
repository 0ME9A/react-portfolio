import Img1 from "../../assets/b1.jpg";
import Img2 from "../../assets/b2.jpg";
import Img3 from "../../assets/b3.jpg";
import Img4 from "../../assets/b4.jpg";
import Img5 from "../../assets/b5.jpg";
import Img6 from "../../assets/b2.jpg";
import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Crypto Currence Dashbord",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 2,
    image: Img2,
    title: "Portfolio Web Design",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 3,
    image: Img3,
    title: "Weather Icon Tranding",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 4,
    image: Img4,
    title: "Apihouse Designed by Omega",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 5,
    image: Img5,
    title: "Photo Stock",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 6,
    image: Img6,
    title: "Ip to Binary Converter",
    github: "https://github.com",
    demo: "https://figma.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
