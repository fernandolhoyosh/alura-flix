import styles from "./Home.module.css"
import GalleryVideos from "../../components/GalleryVideos"
import Banner from "../../components/Banner"

const Home = () => {
  return (
    <section>
        <Banner />
        <GalleryVideos/>
    </section>
  )
}

export default Home