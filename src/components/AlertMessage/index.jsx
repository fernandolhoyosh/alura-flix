import styles from "./AlertMessage.module.css"
import Alert from "@mui/material/Alert";
import AlertTitle  from '@mui/material/AlertTitle';
import { useContext, useEffect, useState } from 'react';
import { VideosContext } from "../../context/VideosContext";


const AlertMessage = ({text, type}) => {
  const {error, setError} = useContext(VideosContext)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      setError(null)
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
      open && (<Alert className={styles.alertStyles} severity={type}>
                <AlertTitle>{type}</AlertTitle>
                  {text}
                </Alert> )
  )
}

export default AlertMessage