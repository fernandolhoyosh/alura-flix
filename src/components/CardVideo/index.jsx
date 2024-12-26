import styles from "./CardVideo.module.css";

const CardVideo = ({color}) => {

    const stylesImg = {
        borderColor: color,
        /* boxShadow: `inset 5px 5px 12px ${color}`,  */ 
    }

  return (
    <figure className={styles.videoContainer}>
      <img className={styles.imageCard} style={stylesImg} src="/src/data/img/fronted-card-1.png" alt="card logo" />
      <figcaption className={styles.captionCard} style={{borderColor:color}}>
        <button className={styles.buttonsCard}>
            <img src="/icons/delete.png" />
            BORRAR
        </button>
        <button className={styles.buttonsCard}>
            <img src="/icons/edit.png" />
            EDITAR
        </button>
      </figcaption>
    </figure>
  )
}

export default CardVideo
