import { useEffect, useState } from "react";
import styles from "./Banner.module.css"

const Banner = ({videos, categories}) => {

  const videoDefault = {
    title: "Challenge React",
    category: "FRONT END",
    image: "/img/player-banner.png",
    description: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
  }

  /* useEffect(() => {
    const intervalo = setInterval(() => {
      
    }, 5000)
    return () => clearInterval(intervalo)
  }, []) */

  const numberRandom =  videos.length > 0 ? Math.floor(Math.random()*videos.length) : 0;
  const video = videos.length > 0 ? videos[numberRandom] : videoDefault;
  const color = categories.filter(category => category.title === video.category).map(category => category.color)[0]

  return (
    <div className={styles.containerBanner}>
        <div className={styles.gradientContainer}></div>
        <img src="/img/banner.png" alt="Banner" />
        <section className={styles.containerSection}>
          <div className={styles.containerInfo}>
            <h3 style={{backgroundColor: color}}>{video.category}</h3>
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
          <img className={styles.cardFeatured} style={{borderColor: color}} src={video.image} alt="Card Imagen" />
        </section>
    </div>
  )
}

export default Banner