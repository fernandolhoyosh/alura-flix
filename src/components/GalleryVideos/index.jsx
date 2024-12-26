import { useState } from "react"
import styles from "./GalleryVideos.module.css"
import Categories from "../Categories"

const GalleryVideos = () => {
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
        {categories.map((category, index) => {
            return <Categories key={index} data={category} />
        })}
    </section>
  )
}

export default GalleryVideos