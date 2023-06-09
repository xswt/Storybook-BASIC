// import React, { useState } from 'react';

import { Button } from './Button';


export default {
  title: 'Components/Button', //Ruta que indicaremos para colocar nuestro componente en el sidebar
  component: Button,  //Componente vamos a utilizar para generar el storie
};


export const primerStorie = ({label})=> <Button setState={()=>{}} label={label}></Button>
export const segundoEjemploStorie = ({label})=> <Button setState={()=>{}} label={label}></Button>
   


//  //PODEMOS CREAR UN TEMPLATE QUE USAREMOS EN EL RESTO DE EJEMPLO MODIFICANDO SOLO LOS ARGUMENTOS QUE NOS INTERESE PERO PERMITIENDO UNA SIMULACION DEL COMPONENTE
// const Template = (args) => {
//   const [nombre, setNombre] = useState("")

//   return(
//     <>
//     El nombre es: {nombre}
//     <br></br>
//       <Button setState={setNombre} {...args}></Button>
//     </>
//   )
// };





//  //EL PRIMERO QUE SE DEFINE ES EL QUE SALE COMO EJEMPLO PRINCIPAL EN LO ALTO DE LA PAGINA

// export const LoQueSeMuestraPrimero = Template.bind({});


// export const SinUsarTemplate = ({label})=>{
//   const [nombre, setNombre] = useState("")

//   return(
//     <>
//     El nombre es: {nombre}
//     <br></br>
//       <Button setState={setNombre} label={label}></Button>
//     </>
//   )
// }


// // Esto lo podemos poner en un componente a parte. 
// const ejemploMKD = `
// <div className=”custom">
// ## JavaScript code

// Ejemplo de codigo con sintaxis de markdown
// </div>

// `


// export const UsandoTemplateA = Template.bind({});
// UsandoTemplateA.args = {
//   label: 'Cambiar a',
// };

// UsandoTemplateA.parameters = {
//   docs: {
//     title:"ejemplo",
//     description: {
      
//       story: ejemploMKD,
//     },
// }
// }





// export const UsandoTemplateB = Template.bind({});
// UsandoTemplateB.args = {
//   label: 'Sistituye por',
// };


