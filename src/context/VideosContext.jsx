import { createContext, useEffect, useState } from "react";

const VideosContext = createContext();

const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [video, setVideo] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch("http://localhost:3000/videos")
                if (!response.ok) {
                    throw new Error (`Error: ${response.status} ${response.statusText}`)
                }
                const data = await response.json()
                setVideos(data)
            } catch (error) {
                console.error("Error al obtener los datos: ", error)
                setError(`Error al obtener los datos: ${error}`)
            }
        }
        fecthData()
    },[])

    return (
        <VideosContext.Provider value={{
            videos,
            setVideos,
            openModal,
            setOpenModal,
            video,
            setVideo,
            error
            }}>
            {children}
        </VideosContext.Provider>
    )
}

export {VideosContext, VideosProvider}