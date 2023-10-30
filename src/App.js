import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import './App.css';





function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
      // Vaciar el formulario
      reset();

  }
  return (
    <div className="App">
      <h3>Registro</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input {...register("firstName",{ required: true, maxLength: 20 })} />
      <br/>
      {errors?.firstName && <span  className="span-error">EL campo es requerido</span> }
      <br/>
      <label>Apellido</label>
      <input {...register("lastName",{ required: true, maxLength: 20 })} />
      <br/>
      {errors?.lastName && <span  className="span-error">EL campo es requerido</span> }
      <br/>
      <label>Selecione el genero</label>
      <select {...register("gender")}>
        <option value="female">fememino</option>
        <option value="male">masculino</option>
        <option value="other">otro</option>
      </select>
      <br/>
      <button type="submit" className="button">Resgistrarte</button>

    </form>
    </div>
  );
}

export default App;


