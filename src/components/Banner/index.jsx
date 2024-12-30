import { useContext} from "react"
import styles from "./Banner.module.css"
import { VideosContext } from "../../context/VideosContext"

const Banner = () => {
  const { videos } = useContext(VideosContext)

  return (
    <div className={styles.containerBanner}>
        <img src="/img/banner.png" alt="Banner" />
        {/* <div className={styles.gradientContainer}></div> */}
        <section className={styles.containerSection}>
          <div className={styles.containerInfo}>
            <h3>{videos.length > 0 ? videos[0].category : "FRONT END"}</h3>
            <h4>Challenge React</h4>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
          </div>
          <img className={styles.cardFeatured} src="/src/data/img/fronted-card-1.png" alt="Card Imagen" />
        </section>
    </div>
  )
}

export default Banner