import { createContext, useEffect, useState } from "react";

const VideosContext = createContext();

const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch("http://localhost:3000/videos")
                const data = await response.json()
                setVideos(data)
            } catch (error) {
                console.error("Error al obtener los datos: ", error)
            }
        }
        fecthData()
    },[])

    return (
        <VideosContext.Provider value={{videos}}>
            {children}
        </VideosContext.Provider>
    )
}

export {VideosContext, VideosProvider}