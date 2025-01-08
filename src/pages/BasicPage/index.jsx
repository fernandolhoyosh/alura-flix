import { Outlet } from "react-router-dom"
import styles from "./BasicPage.module.css"
import { useContext } from "react"
import { VideosContext } from "../../context/VideosContext"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import AlertMessage from "../../components/AlertMessage"

const BasicPage = () => {
  const {alert} = useContext(VideosContext)
  return (
    <div className={styles.container}>
      {alert && <AlertMessage />}
        <Header />
        <main className={styles.mainContainer}>
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default BasicPage