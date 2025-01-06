import { useContext, useState } from "react"
import styles from "./GalleryVideos.module.css"
import Categories from "../Categories"
import { VideosContext } from "../../context/VideosContext"
import MessageTitle from "./MessageTitle"

const GalleryVideos = ({videos, categories}) => {
    
  return (
    <section className={styles.galleryContainer}>
      {videos.length > 0 ?
        categories.map((category, index) => 
             <Categories key={index} data={category} videos={videos.filter(video => video.category === category.title)} />
        ) : <MessageTitle text="No se encontraron videos" /> }
    </section>
  )
}

export default GalleryVideos