import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <img src="/src/assets/Logo.png" alt="Logo Alura Flix" />
      <nav>
        <Link className={styles.link} to={"/"}>
            <Button text="HOME" />
        </Link>
        <Link className={styles.link} to={"/new"}>
            <Button text="NUEVO VIDEO" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
