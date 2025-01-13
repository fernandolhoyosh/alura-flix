import styles from "./CardVideo.module.css";
import useConectionApi from "../../hooks/useConectionApi";
import { useContext } from "react";
import { VideosContext } from "../../context/VideosContext";
import { Link } from "react-router-dom";

const CardVideo = (props) => {
  const {openModal, setOpenModal, setVideo} = useContext(VideosContext)
  const {data, color} = props
  const { requestDeleteVideo } = useConectionApi()

  const handleEditCard = () => {
    setOpenModal(!openModal)
    setVideo(data)
  }

    const stylesImg = {
        borderColor: color,
        boxShadow: `inset 0px 0px 10px ${color}`
    }

    const stylesCaption = {borderColor: color, boxShadow: `inset 0px 0px 10px ${color}`}

  return (
    <figure className={styles.videoContainer}>
      <Link to={`/videos/${data.id}`} state={color}>
        <img className={styles.imageCard} style={stylesImg} src={data.image} alt={`Card: ${data.title}`} />
      </Link>
      <figcaption className={styles.captionCard} style={stylesCaption}>
        <button onClick={ ()=> requestDeleteVideo(data.id)} className={styles.buttonsCard}>
            <img src="/icons/delete.png" />
            BORRAR
        </button>
        <button className={styles.buttonsCard} onClick={handleEditCard}>
            <img src="/icons/edit.png" />
            EDITAR
        </button>
      </figcaption>
    </figure>
  )
}

export default CardVideo
