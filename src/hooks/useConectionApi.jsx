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

    async function requestUpdateVideo(id, data) {
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error("Error al actualizar el video")
            }else {
                requestGetVideos()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return { requestGetVideos, requestDeleteVideo, requestUpdateVideo }

}

export default useConectionApi