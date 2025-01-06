import { Outlet } from "react-router-dom"
import styles from "./BasicPage.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const BasicPage = () => {
  return (
    <div className={styles.container}>
        <Header />
        <main className={styles.mainContainer}>
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default BasicPage