
import PropTypes from 'prop-types';


export const Button = ({setState,label="Cambiar a"})=>{

    const nombres = ["guille","pau"]


return(
    <>
    <button onClick={()=>setState(nombres[0])}>{label} Guille</button>
    <button onClick={()=>setState(nombres[1])}>{label} Paula</button>
    </>
)}



Button.propTypes = {
 
    setState: PropTypes.func.isRequired,
    label: PropTypes.string,
  };





/**
 * Descripcion de nuestro componente
 */

  
   /** El setState es necesario para modificar el nombre en React */
  
