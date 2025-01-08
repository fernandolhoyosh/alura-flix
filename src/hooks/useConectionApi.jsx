import { useContext } from "react"
import { VideosContext } from "../context/VideosContext"

const useConectionApi = () => {
    const {setVideos, setAlert} = useContext(VideosContext)

    async function requestGetVideos () {
        try {
            const response = await fetch("http://localhost:3000/videos")
            const data = await response.json()
            setVideos(data)
        } catch (error) {
            console.error("Error al obtener los datos: ", error)
        }
    }

    async function requestAddVideo(data) {
        try {
            const response = await fetch("http://localhost:3000/videos", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error("Error en la peticion: ", response.statusText)
            }else {
                setAlert({
                    status:"success",
                    type: "Success",
                    message:`Video agregado correctamente`
                })
                requestGetVideos()
            }
            const responseData = await response.json()
            return responseData
        } catch (error) {
            console.error("Hubo un problema con la solicitud: ", error)
            setAlert({
                status:"error",
                type: "Error",
                message:`Hubo un problema con la solicitud: ${error}`
            })
        }
    }

    async function requestDeleteVideo(id) {
        try {
            const response = await fetch(`http://localhost:3000/videos/${id}`, {
                method: "DELETE"
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`)
            }else {
                requestGetVideos()            
            }
        } catch (error) {
            console.error(`Error al eliminar el video: ${error}`)
            setAlert({
                status:"error",
                type: "Error",
                message:`No se puede eliminar el video: ${error}`
            })
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
                setAlert({
                    status:"info",
                    type: "Info",
                    message:`Video actualizado correctamente`
                })
                requestGetVideos()
            }
        } catch (error) {
            console.error(error)
            setAlert({
                status:"error",
                type: "Error",
                message:`Hubo un problema al actualizar el video: ${error}`
            })
        }
    }

    return { requestGetVideos, requestAddVideo, requestDeleteVideo, requestUpdateVideo }

}

export default useConectionApi