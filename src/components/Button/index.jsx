import styles from "./Button.module.css";

const Button = ({ text, icon, type, onClick, classIcon, className }) => {
  return (
    <button
      className={`${styles.button} ${classIcon && styles.buttonIcon} ${className && styles.buttonAddPhone}`}
      type={type}
      onClick={onClick}
    >
      <img src={icon} alt="Icon" />
      {text}
    </button>
  );
};

export default Button;
