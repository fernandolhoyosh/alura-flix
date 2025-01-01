import styles from "./Button.module.css"

const Button = ({text, type, onClick}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button