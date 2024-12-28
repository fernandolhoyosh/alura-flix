import { useContext, useEffect } from "react"
import { VideosContext } from "../context/VideosContext"

const useConectionApi = () => {
    const {videos, setVideos} = useContext(VideosContext)

    async function requestGetVideos () {
        try {
            const response = await fetch("http://localhost:3000/videos")
            const data = await response.json()
            setVideos(data)
        } catch (error) {
            console.error("Error al obtener los datos: ", error)
        }
    }

    async function requestDeleteVideo(id) {
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
                method: "DELETE"
            })
            if (!response.ok) {
                throw new Error("Error al eliminar el video")
            }else {
                requestGetVideos()            
            }
        } catch (error) {
            console.log(error)
        }
    }

    return { requestGetVideos, requestDeleteVideo }

}

export default useConectionApi