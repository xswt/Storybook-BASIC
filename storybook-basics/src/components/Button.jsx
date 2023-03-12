
import PropTypes from 'prop-types';

/**
 * Descripcion de nuestro componente
 */

export const ButtonPG = ({setState,label="Cambiar a"})=>{

    const nombres = ["guille","pau"]


return(
    <>
    <button onClick={()=>setState(nombres[0])}>{label} Guille</button>
    <button onClick={()=>setState(nombres[1])}>{label} Paula</button>
    </>
)}




ButtonPG.propTypes = {
    /** El setState es necesario para modificar el nombre en React */
    setState: PropTypes.func.isRequired,
    label: PropTypes.string,
  };






  

  
