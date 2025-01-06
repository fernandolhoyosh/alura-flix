import styles from "./MessageTitle.module.css"

const MessageTitle = ({text}) => {
  return (
    <h2 className={styles.titleMessage}>{text}</h2>
  )
}

export default MessageTitle