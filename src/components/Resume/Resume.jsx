import styles from "./ResumeStyles.module.css";
import watchThisSpace from "../../assets/watchThisSpace.jpg";

function Resume() {
  return (
    <section id="resume" className={styles.container}>
      <h1>Updated Resume</h1>
      <h2>Coming soon...</h2>
      <img src={watchThisSpace} alt="" className={styles.img} />
    </section>
  );
}

export default Resume;
