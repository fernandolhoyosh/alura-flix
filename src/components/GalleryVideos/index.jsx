import { useContext, useState } from "react"
import styles from "./GalleryVideos.module.css"
import Categories from "../Categories"
import { VideosContext } from "../../context/VideosContext"

const GalleryVideos = () => {
    const {videos} = useContext(VideosContext)
    const [categories, setCategories] = useState([
        {
            id:1,
            title: "FRONT END",
            color: "#6BD1FF"
        },
        {
            id:2,
            title: "BACK END",
            color: "#00C86F"
        },
        {
            id:3,
            title: "INNOVACIÓN Y GESTIÓN",
            color: "#FFBA05"
        }
    ])
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