import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.png";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero">
      <div className={styles.heroSection}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="A cartoon avatar of tingly"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Light/Dark theme toggle"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Tingly</h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://github.com/TinglyTingly" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p>Melding design with AI to make beautiful things.</p>
        <a href={CV} target="_blank">
          {/* Add resume page? */}
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
