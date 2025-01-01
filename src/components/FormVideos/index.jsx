import { useContext } from "react";
import { VideosContext } from "../../context/VideosContext";
import Button from "../Button";
import styles from "./FormVideos.module.css"
import { useForm } from "react-hook-form"
import { useEffect } from "react";

const FormVideos = () => {
    const { video } = useContext(VideosContext)
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    useEffect(() => {
        setValue('Titulo', video.title)
        setValue('Categoría', video.category)
        setValue('Imagen', video.image)
        setValue('Video', video.video)
        setValue('Descripción', video.description)
    }, [setValue])

    const handleResetForm = () => {
        reset();
    }

  return (
    <form className={styles.formVideos} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
            <label htmlFor="">Título</label>
            <input type="text" placeholder="Titulo" {...register("Titulo", {required: true, max: 50, min: 3})} />
        </div>   
        <div className={styles.inputContainer}>
            <label htmlFor="">Categoría</label>
            <select {...register("Categoría", { required: true })}>
                <option value="FRONT END">Front End</option>
                <option value="BACK END"> Back End</option>
                <option value="INNOVACIÓN Y GESTIÓN"> Innovación y Gestión</option>
            </select>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="">Imagen</label>
            <input type="text" placeholder="Imagen" {...register("Imagen", {required: true, max: 200, min: 5})} />
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="">Video</label>
            <input type="text" placeholder="Video" {...register("Video", {required: true, max: 300, min: 5})} />
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="">Descripción</label>
            <textarea {...register("Descripción", {required: true, max: 300})} />
        </div>
        <div className={styles.buttonForm}>
            <Button type="submit" text="GUARDAR" />
            <Button type="button" text="LIMPIAR" onClick={handleResetForm} />
        </div>    
    </form>
  )
}

export default FormVideos