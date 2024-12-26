import styles from "./Categories.module.css"
import CardVideo from "../CardVideo"

const Categories = (props) => {
    const {title, color} = props.data
  return (
    <section>
        <h4 className={styles.title} style={{backgroundColor:color}}>{title}</h4>
        <picture className={styles.containerVideos}>
            <CardVideo color={color} />
            <CardVideo color={color} />
            <CardVideo color={color} />
        </picture>
    </section>
  )
}

export default Categories