import styles from "./ProjectsStyles.module.css";
import tinglyAvatar from "../../assets/tinglyAvatar1.png";
import ProjectCard from "../../common/ProjectCard";
import george from "../../assets/GeorgeCarlin.jpg";
// import hipsster from "../../assets/hipsster.png";
// import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tinglyAvatar}
          link="https://github.com/TinglyTingly/tingly.codes"
          h3="tingly.codes"
          p="This very site"
        />
        <ProjectCard
          src={george}
          link=""
          h3="Product Landing Page"
          p="Coming Soon"
        />
      </div>
    </section>
  );
}

export default Projects;
