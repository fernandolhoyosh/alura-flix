import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NotFound from "../NotFound"

const VideoPlayer = () => {
    const [video, setVideo] = useState({})
    const params = useParams()

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

    {console.log(video)}

  return (
    <section>
        <h2>{video.title}</h2>
        <div>
        <iframe width="560" height="315"
            src={video.video}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>               
        </iframe>
        </div>
    </section>
  )
}

export default VideoPlayer