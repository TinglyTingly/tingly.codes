import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/tinglyAvatar1.png";
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
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="AI Generated Avatar of Tingly"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.heroSection}>
        <div className={styles.info}>
          <h1 className="title">Tingly</h1>
          <h2>Software Engineer</h2>
          <span>
            <a href="https://github.com/TinglyTingly" target="_blank">
              <img src={githubIcon} alt="GitHub Icon" />
            </a>
          </span>
          <p className="description">
            Melding design with AI to make beautiful things.
          </p>
          <a href={CV}>
            <button className={styles.button} role="button">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
