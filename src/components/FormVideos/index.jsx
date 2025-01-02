import { useContext } from "react";
import { VideosContext } from "../../context/VideosContext";
import Button from "../Button";
import styles from "./FormVideos.module.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useConectionApi from "../../hooks/useConectionApi";

const FormVideos = ({colorBorder}) => {
  const { video, openModal, setOpenModal } = useContext(VideosContext);
  const {requestUpdateVideo} = useConectionApi()
  const { register, handleSubmit, reset, formState: { errors }} = useForm();

  const borderStyle = {borderColor: colorBorder}

  const onSubmit = (data) => {
    console.log(data)
    if (openModal) {
        requestUpdateVideo(video.id, data)
        handleResetForm()
        setOpenModal(null)
    }
  } 
  /* console.log(errors) */

  useEffect(() => {
    if (openModal) {
        reset({
            title: video.title,
            category: video.category,
            image: video.image,
            video: video.video,
            description: video.description
        })
    } else {
        handleResetForm();
    }
  }, []);

  const handleResetForm = () => {
    reset();
    reset({category:""});
  };

  const formValidations = {
    title: {
      required: "El título es obligatorio",
      minLength: {
        value: 3,
        message: "Se requiere 3 carácteres como mínimo",
      }
    },
    category: {
        required: "Seleccione una categoría"
    },
    image: {
        required: "El enlace es obligatorio",
        minLength: {
          value: 5,
          message: "Se requiere 5 carácteres como mínimo",
        }
    },
    video: {
        required: "La url es obligatoria",
        minLength: {
          value: 5,
          message: "Se requiere 5 carácteres como mínimo",
        }
    },
    description: {
        required: "La descripcion es obligatoria",
        minLength: {
          value: 5,
          message: "Se requiere 5 carácteres como mínimo",
        },
        maxLength: {
            value: 500,
            message: "Máximo 500 carácteres"
        }
    }
  };

  return (
    <form className={styles.formVideos} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label htmlFor="">Título</label>
        <input
          type="text"
          placeholder={errors.title?.message || "Ingrese el titulo"}
          {...register("title", formValidations.title)}
          className={errors.title && styles.errorsInput}
          style={borderStyle}
        />
        <span>{errors.title?.message}</span>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Categoría</label>
        <select {...register("category", formValidations.category)}
          className={errors.category && styles.errorsInput} style={borderStyle}>
          <option value="" disabled defaultValue="" hidden>
            Seleccione una categoría
          </option>
          <option value="FRONT END">Front End</option>
          <option value="BACK END"> Back End</option>
          <option value="INNOVACIÓN Y GESTIÓN"> Innovación y Gestión</option>
        </select>
        <span>{errors.category?.message}</span>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Imagen</label>
        <input
          type="text"
          placeholder={errors.image?.message || "Ingrese el enlace de la imagen"}
          {...register("image", formValidations.image)}
          className={errors.image && styles.errorsInput}
          style={borderStyle}
        />
        <span>{errors.image?.message}</span>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Video</label>
        <input
          type="text"
          placeholder={errors.video?.message || "Ingrese el enlace del video"}
          {...register("video", formValidations.video)}
          className={errors.video && styles.errorsInput}
          style={borderStyle}
        />
        <span>{errors.video?.message}</span>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Descripción</label>
        <textarea
          placeholder={errors.description?.message || "¿De qué trata este video?"}
          {...register("description", formValidations.description)}
          className={errors.description && styles.errorsInput}
          style={borderStyle}
        />
        <span>{errors.description?.message}</span>
      </div>
      <section className={styles.buttonForm}>
        <Button type="submit" text="GUARDAR" />
        <Button type="button" text="LIMPIAR" onClick={handleResetForm} />
      </section>
    </form>
  );
};

export default FormVideos;
