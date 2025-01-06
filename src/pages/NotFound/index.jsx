import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img className={styles.notFoundImage} src="/src/assets/movie-search.png" alt="search movie" />
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundText}>Página no encontrada</p>
    </div>
  )
}

export default NotFound