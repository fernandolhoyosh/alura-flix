import styles from "./VideoPlayer.module.css"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import NotFound from "../NotFound"

const VideoPlayer = () => {
    const [video, setVideo] = useState({})
    const params = useParams()
    const location = useLocation()
    const color = location.state || "#FFFFFF"

    useEffect(() => {
        fetch(`http://localhost:3000/videos/?id=${params.id}`)
            .then(response => response.json())
            .then(data => {
                setVideo(...data)
            })
    },[])

    if (!video) {
        return <NotFound />
    }


  return (
    <section className={styles.container}>
        {console.log(color)}
        <div className={styles.containerPlayer}>
        <iframe width="100%" height="100%"
            src={video.video}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{borderColor: color}}>               
        </iframe>
        </div>
        <div className={styles.containerTitles}>
        <h3>{video.title}</h3>
        <h4>{video.description}</h4>
        </div>
    </section>
  )
}

export default VideoPlayer