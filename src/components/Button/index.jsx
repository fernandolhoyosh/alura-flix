import styles from "./Button.module.css"

const Button = ({text, icon, type, onClick}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}><img src={icon} alt="Icon" />{text}</button>
  )
}

export default Button