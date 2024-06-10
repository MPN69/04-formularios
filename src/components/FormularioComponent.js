import React from "react";

export const FormularioComponent = () => {
  const conseguirDatosFormulario = (e) => {
    e.preventDefault();

    let usuario = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      genero: e.target.genero.value,
      biografia: e.target.biografia.value,
    };
    console.log(usuario.nombre);
  };

  return (
    <div>
      <h1>Formularios con React</h1>
      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" placeholder="Nombre" name="nombre" />
        <input type="text" placeholder="Apellido" name="apellido" />
        <select name="genero">
          <option value={"hombre"}>Hombre</option>
          <option value={"mujer"}>Mujer</option>
        </select>
        <textarea placeholder="Biografia" name="biografia"></textarea>
        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};
