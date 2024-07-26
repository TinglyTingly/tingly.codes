import styles from "./SkillsStyles.module.css";
import html from "../../assets/html5-plain.svg";
import css from "../../assets/css3-original.svg";
import javascript from "../../assets/javascript-original.svg";
import SkillList from "../../common/SkillList";
import typescript from "../../assets/typescript-original.svg";
import node from "../../assets/nodejs-original.svg";
import react from "../../assets/react-original.svg";
import angular from "../../assets/angularjs-original.svg";
import vue from "../../assets/vuejs-original.svg";
import tailwindcss from "../../assets/tailwindcss-original.svg";
import redux from "../../assets/redux-original.svg";
import webpack from "../../assets/webpack-original.svg";
import git from "../../assets/git-original.svg";
import jest from "../../assets/jest-plain.svg";
import bootstrap from "../../assets/bootstrap-original.svg";
// import puppeteer from "../../assets/puppeteer-plain.svg";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={javascript} skill="JavaScript" />
        <SkillList src={typescript} skill="TypeScript" />
        <SkillList src={node} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={angular} skill="Angular" />
        <SkillList src={vue} skill="Vue" />
        <SkillList src={tailwindcss} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={redux} skill="Redux" />
        <SkillList src={webpack} skill="Webpack" />
        <SkillList src={git} skill="Git" />
        <SkillList src={jest} skill="Jest" />
        <SkillList src={bootstrap} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
