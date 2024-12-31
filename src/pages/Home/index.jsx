import styles from "./Home.module.css"
import { useContext, useState } from "react"
import { VideosContext } from "../../context/VideosContext"
import GalleryVideos from "../../components/GalleryVideos"
import Banner from "../../components/Banner"
import Modal from "../../components/Modal"

const Home = () => {
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
    <section>
        <Banner categories={categories} videos={videos} />
        <GalleryVideos categories={categories} videos={videos}/>
        <Modal/>
    </section>
  )
}

export default Home