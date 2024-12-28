import styles from "./CardVideo.module.css";
import useConectionApi from "../../hooks/useConectionApi";

const CardVideo = (props) => {
  const {data, color} = props
  const { requestDeleteVideo } = useConectionApi()

    const stylesImg = {
        borderColor: color,
        boxShadow: `inset 0px 0px 10px ${color}`
    }

    const stylesCaption = {borderColor: color, boxShadow: `inset 0px 0px 10px ${color}`}

  return (
    <figure className={styles.videoContainer}>
      <img className={styles.imageCard} style={stylesImg} src={data.image} alt={`Card: ${data.title}`} />
      <figcaption className={styles.captionCard} style={stylesCaption}>
        <button onClick={ ()=> requestDeleteVideo(data.id)} className={styles.buttonsCard}>
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
