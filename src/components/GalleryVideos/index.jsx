import { useContext, useState } from "react"
import styles from "./GalleryVideos.module.css"
import Categories from "../Categories"
import { VideosContext } from "../../context/VideosContext"

const GalleryVideos = ({videos, categories}) => {
    
  return (
    <section className={styles.galleryContainer}>
        {
        categories.map((category, index) => 
             <Categories key={index} data={category} videos={videos.filter(video => video.category === category.title)} />
        )}
    </section>
  )
}

export default GalleryVideos