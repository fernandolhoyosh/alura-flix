import styles from "./AlertMessage.module.css"
import Alert from "@mui/material/Alert";
import AlertTitle  from '@mui/material/AlertTitle';
import { useContext, useEffect, useState } from 'react';
import { VideosContext } from "../../context/VideosContext";


const AlertMessage = () => {
  const { alert, setAlert} = useContext(VideosContext)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      setAlert(null)
    }, 5000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
      open && (<Alert className={styles.alertStyles} severity={alert.status}>
                <AlertTitle>{alert.type}</AlertTitle>
                  {alert.message}
                </Alert> )
  )
}

export default AlertMessage