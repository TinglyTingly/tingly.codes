import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/checkmark-dark.svg";
import ProjectCard from "../../common/ProjectCard";
// import freshBurger from "../../assets/fresh-burger.png";
// import hipsster from "../../assets/hipsster.png";
// import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="tingly.codes"
          h3="tingly.codes"
          p="This very site"
        />
        <ProjectCard
          src={viberr}
          link=""
          h3="Product Landing Page"
          p="Coming Soon"
        />
      </div>
    </section>
  );
}

export default Projects;
