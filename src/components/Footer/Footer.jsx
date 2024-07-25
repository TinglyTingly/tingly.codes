import styles from "./FooterStyles.module.css";
import footerIcon from "../../assets/checkmark-dark.svg";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <img src={footerIcon} alt="" />
    </section>
  );
}

export default Footer;
