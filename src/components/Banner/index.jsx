import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <div className={styles.containerBanner}>
        <img src="/img/banner.png" alt="Banner" />
        <div className={styles.containerInfo}>
            <h3>FRONT END</h3>
            <h4>Challenge React</h4>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
    </div>
  )
}

export default Banner