import styles from "./Button.module.css";

const Button = ({ text, icon, type, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${className && styles.buttonAddPhone}`}
      type={type}
      onClick={onClick}
    >
      <img src={icon} alt="Icon" />
      {text}
    </button>
  );
};

export default Button;
