import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, live, source},
}) => {
  return (
    <div className="block">
      <div className={styles.container}>
      <img
        src={`${imageSrc}`}
        alt='img-project'
        className={styles.image}
      />
      <h3 className={styles.title}>{title}
      <a href={live} className={styles.demo}>
            <BsBoxArrowUpRight/>
          </a>
      </h3>
      
    </div>
    </div>
  );
};

export default ProjectCard