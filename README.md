# STORYBOOK - Basic config + React (JS)
[Documentacion oficial Storybook con React][storybookOfficialDocReact] 

Storybook es una herramienta de código abierto para construir componentes UI y páginas de manera aislada, generando documentación y posibilitando tanto desarrollo como el testing de componentes

## PRIMEROS PASOS 

### Instalación - Storybook
---
Lo primero es crear un proyecto de React escribiendo en la consola:

  ```cmd
    npx create-react-app nombre-de-nuestra-app
  ```
  
Luego ingresamos en nuestro nuevo proyecto `cd nombre-de-nuestra-app` y procederemos a instalar `Storybook`
  ```
    npx storybook init
  ```
Automaticamente nos va a detectar con que tenemos montado el proyecto de React ya sea JS o TS y creara una plantilla ajustada a dicho proyecto.

Finalizada su instalacion veremos en nuestro path como tenemos dos carpetas nuevas `.storybook` y `stories`

<kbd>![image](https://user-images.githubusercontent.com/32310561/224539931-35fcc969-0632-4d86-9b85-1bc09a7bec1f.png)</kbd>

Ahora solo queda ejecutar nuestro Storybook para ello lanzaremos el siguiente comando
  ```
    npm run storybook
  ```
Es posible que salga un error en consola relacionado con `@testing-library/dom` para ello tendremos que instalar o actualizar dicha libreria escribiendo en consola
  ```
    npm i @testing-library/dom
  ```
Toda la documentacion de la libreria la teneis en el enlace  [@testing-library][testingLibrarDomLibrary]

Probamos a ejecutar de nuevo el comando de `npm run storybook` y si todo esta bien instalado podremos acceder a http://localhost:6006/ y ver la siguiente imagen:
<kbd>![image](https://user-images.githubusercontent.com/32310561/224540411-72f4b444-d785-4cfe-a169-697bd0c4f7f2.png)</kbd>

Estupendo, ya tenemos funcionando nuestra primera aplicacion con Storybook. Para facilitar su entendimiento y desarrollo vamos a instalar dos cosas más relacionadas con MD (Mark down)


### Storybook + Markdown (MD)
---

### Conocimientos necesarios sobre MD
Storybook basa todo su contenido de "texto" en MDX que es una combinacion de Markdown + JSX Significa que puede usar la sintaxis concisa de Markdown (como el encabezado #) para su documentación e incrustar libremente bloques de componentes JSX en cualquier punto del archivo

Vamos a entender un poco mas sobre MD antes de instalar lo que necesita nuestro `Storybook`



  ####  [Que es MD (Markdown)][MarkDownQueEs]
  >Markdown es un lenguaje de marcado con el que puedes agregar formato a documentos de texto plano. Fue creado por John Gruber en el año 2004, siendo a día de hoy uno de los lenguajes de marcado más famosos.

  #### [¿Para que sirve MD (Markdown)?][MarkDownParaQueSeUtiliza]
  >La sintaxis de Markdown permite crear documentos y tomar notas con rapidez, pudiendo crear desde pequeños artículos hasta libros enteros que luego podrás imprimir o exportar a PDF.
  >
#### [Sintaxis MD][MDSintaxBasic]
Una vez que sabemos "Que es" y "Para que sirve" solo nos queda entender su sintaxis, esto no es para nada necesario pero si nos permitira llevar nuestra documentacion del Storybook a otro nivel de personalizacion. Para ello tendreis estos 3 accesos que tienen todo lo que podreis llegar a necesitar:
  * [Sintaxis básica][MDSintaxBasic]
  * [Sintaxis  avanzada][MDSintaxAdvance]
  * [Consejos adicionales][MDSintaxExtra]


### Instalacion de MD necesaria en nuestro Storybook
  
  La libreria que vamos a necesitar es la de [react-markdown][reactMarkdown] para instalarla tendremos que parar nuestra ejecucion del Storybook en la consola y ejecutar el siguiente comando
  ```
    npm install react-markdown
  ```
  Tras la instalacion ya nos detectara el Storybook la sintaxis que utilicemos de MD al documentar nuestros componentes.
  
  Para una mayor facilidad de edicion aconsejamos alguna extension propia de vuestro editor. En nuestro caso estamos utilizando VSCode y como tal la extension que recomendamos seria:
  
  <kbd>![image](https://user-images.githubusercontent.com/32310561/224542117-5e5a3aeb-70d2-48bf-b398-a0befd00c41d.png)</kbd>

  Con esto ultimo ya tendriamos todo nuestro entorno preparado para trabajar con `Storybook` y poder desarrollar una documentacion sencilla rapida y amigable. 
  
  
  
### Estructura de carpetas y ficheros - Storybook
---

> Se entiende como `storie` al conjunto de datos relacionados con la documentacion de un componente. Esta documentacion se compone de un renderizado del componente mas una breve descripcion de los parametros que acepta dicho componente. 




La primera carpeta que encontramos es la de `.storybook` esta carpeta contiene los ficheros propios de configuración 
<kbd>![image](https://user-images.githubusercontent.com/32310561/224654396-4bee5c50-e8c5-45c8-99e8-1c791f82383d.png)</kbd>

Como podemos apreciar por "defecto" nos vienen solo dos `Main` y `Preview` pero hay una mas importante que debemos conocer que es `Manager`
   * `Main` corresponde con la configuracion global de nuestro `storybook`.
   
        <kbd>![image](https://user-images.githubusercontent.com/32310561/224684682-9501327e-a941-4362-a13b-4b4fe3946ac4.png)</kbd>

   * `Preview` corresponde con la parte que vemos de los componentes que se renderizan en el `storybook`.
   * `Manager` corresponde con el resto del `storybook`.

     
        <kbd>![Captura](https://user-images.githubusercontent.com/32310561/224781086-9a89f989-34f3-4273-bfe0-ba65621b60a2.JPG)</kbd>
      
   A parte de la carpeta `.storybook` por defecto nos crea en `src` una carpeta llamada `stories` .
    
<kbd>![Captura](https://user-images.githubusercontent.com/32310561/224773147-e1eb1dda-8acc-4e01-9025-30bfaf0a8c59.png)</kbd>

    
   Esta carpeta contiene varios ejemplos de como documentar nuestros componentes. Principalmente tenemos que entender que existen dos tipos de ficheros:
   
   * `nombreFichero.stories.mdx` 
   * `nombreFichero.stories.jsx/tsx` 
  
   
   Como hemos visto en la configuracion general nuestro `Storybook` buscara en el path src todos los ficheros que tengan `.stories` y terminen en `.jsx .js .ts .tsx .mdx`. ![image](https://user-images.githubusercontent.com/32310561/224774558-f42772db-fa8e-47d6-920f-e8d1de63652c.png) o ![image](https://user-images.githubusercontent.com/32310561/224774697-c3fc6bcc-1afe-4c1f-a0ba-bd4b26644362.png) 
   
   
La carpeta stories realmente no es necesaria , la ha creado `storybook` como recomendacion de donde almacenar nuestros ficheros. Nosotros podemos poner los ficheros a la altura que queramos siempre que esten dentro de la ruta especificada en el fichero de configuración `main`


## DOCUMENTAR COMPONENTES
Ahora que tenemos claros los conceptos basicos de `storybook` y tenemos el entorno montado y funcionando podemos ponernos a trabajar con el codigo y documentar nuestros primeros componentes. Vamos a ir viendo los dos tipos de ficheros que se pueden crear para documentar y las configuraciones que ofrecen cada uno al montar las `stories`.

#### COMPONENTE DE REACT - Button.jsx
```javascript
  export const Button = ({setState,label="Cambiar a"})=>{

    const nombres = ["guille","pau"]


return(
    <>
    <button onClick={()=>setState(nombres[0])}>{label} Guille</button>
    <button onClick={()=>setState(nombres[1])}>{label} Paula</button>
    </>
)}
```

Esto seria un componente básico de React que se usa para cambiar el nombre de un estado en el padre entre Guille y Paula dependiendo de que botón pulsemos. Tenemos dos props definidas:
* `setState` que nos permite modificar un estado del useState en el padre que use el componente.
* `label` texto que acompaña a los botones que modifican el nombre entre Guille y Paula.


Vamos a ver como configurar paso a paso este componente para que se integre sin problemas en nuestro `storybook`.

Partimos de que hemos eliminado la carpeta de stories que nos crea por defecto en la instalacion de `storybook` y tenemos levantado el entorno `npm run storybook`. Tendremos la siguiente imagen:

<kbd>![image](https://user-images.githubusercontent.com/32310561/224855023-69a38646-8eb6-45fa-b288-c3241dc1a852.png)</kbd>

Nos muestra un error de que no encuentra ninguna storie en nuestro src, es correcto ya que hemos eliminado todo lo que nos ponia por defecto la instalacion. Asi podemos partir de cero y entender todo paso por paso. 

Al lado de nuestro componente `Button.jsx` vamos a crear `Button.stories.jsx` al poner stories ya va a poder encontrarlo y leerlo `storybook`. Vamos a añadir las primeras lineas de codigo para generar nuestra primera `storie`

#### Button.storie.jsx
```javascript
import { Button } from './Button';


export default {
  title: 'Button', //Ruta que indicaremos para colocar nuestro componente en el sidebar
  component: Button,  //Componente vamos a utilizar para generar el storie
};


export const primerStorie = ({label})=> <Button setState={()=>{}} label={label}></Button>

```

Una vez guardemos los cambios podremos ver que ya no tenemos el error y que sale nuestra primera `storie` en el navegador

<kbd>![image](https://user-images.githubusercontent.com/32310561/224856286-545ec219-7b9f-4b18-9efc-1fbde049c6c1.png)</kbd>

Actualmente no es funcional pero ya nos permite ver como "quedaria" nuestro componente si lo integramos en el proyecto de react. En cada storie tenemos dos formas de ver la documentacion:

<kbd>![image](https://user-images.githubusercontent.com/32310561/224856452-68b8daf8-5b17-4a82-b14c-bff1d736076b.png)</kbd>

* `Canvas` Es una parte mas interactiva, nos permite modificar las properties del componente y ver al momento como cambia
* `Docs` Es una parta mas informativa, nos permite leer mas al detalle como funciona el componente y todas sus opciones de configuración.

Esta configuración ![image](https://user-images.githubusercontent.com/32310561/224858244-5a3027fc-02f0-473a-8626-0036fe9fac2b.png) lo que nos indica es la posicion del componente en el sidebar de la izquierda. En nuestro ejemplo solo hemos puesto `Button` de ahi que tengamos esta imagen

<kbd>![image](https://user-images.githubusercontent.com/32310561/224858384-ea50d361-7914-497d-9b31-d57263e0e037.png)</kbd>

Si añadimos algo mas a la ruta como por ejemplo `title: 'Components/Button` el resultado seria el siguiente:

<kbd>![image](https://user-images.githubusercontent.com/32310561/224858580-45d9e231-4c7f-46da-98cc-5744d55f3387.png)</kbd>

Nos crearia un nuevo "grupo" que engloba a `Button`, esto nos vale para agrupar diferentes `stories` por categorias o grupos de componentes en el sidebar y tenerlo ordenado. 

Es importante destacar que dentro de cada `storie` podemos tener varios ejemplos programados. En nuestro codigo `Button.stories.jsx` solo tenemos un ejemplo configurado:
```javascript
  export const primerStorie = ({label})=> <Button setState={()=>{}} label={label}></Button>
```
Pero podriamos añadir otro más o los que queramos:

```javascript
  export const primerStorie = ({label})=> <Button setState={()=>{}} label={label}></Button>
  export const segundoEjemploStorie = ({label})=> <Button setState={()=>{}} label={label}></Button>
```

Dando como resultado en el sidebar la siguiente imagen:

<kbd>![image](https://user-images.githubusercontent.com/32310561/224859047-206d37d3-2a30-4274-8a17-584d9824ae95.png)</kbd>

Sin embargo en la pestaña de `Docs` veremos solo un ejemplo principal y `Segundo Ejemplo Storie` pero... que ha pasado con el `primerStorie`?.

<kbd>![image](https://user-images.githubusercontent.com/32310561/224860322-c01c8768-22a7-438a-b757-9059aa1242b5.png)</kbd>

Esto se debe a que el primer ejemplo o `storie` que configuremos en el fichero SIEMPRE sera tomado como el principal y sera el que se muestre al principio. 








Vamos a modificar nuestro componente de React para que `Storybook` pueda actualizar la informacion con mas detalle y que nuestro componente vaya siendo cada vez mas funcional. 

#### Button.jsx
```javascript
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

```

Hemos añadido las propTypes que ademas de ser una buena practica en React nos permite que `Storybook` detecte automaticamente de que tipo son las properties del componente y si son obligatorias o no. 

En esta caso estamos indicando que `setState` es de tipo funcion y es obligatoria `isRequired`, por otro lado le estamos indicando que `label` es de tipo String

Con este simple cambio veremos como la pestaña de `Docs` pasa de tener esta imagen:

<kbd>![image](https://user-images.githubusercontent.com/32310561/224857429-8130b595-d447-4ef9-97ce-98ab3c3f5901.png)</kbd>

a esta otra:

<kbd>![image](https://user-images.githubusercontent.com/32310561/224857505-39abd31e-5b6f-4cbe-8f46-438719bb65c3.png)</kbd>

Ahora nos reconoce los tipos correctame, nos muestra todas las properties que usa el componente y ademas nos indica que `setState`es obligatoria añadiendo un * rojo. Ademas de todos estos cambios al haber definido como tipo string `label` nos permite pulsar 

![image](https://user-images.githubusercontent.com/32310561/224857862-56c491c9-0c4b-4830-8788-88dad1ea5337.png)

Y modificar el mensaje que sale en boton en la parte superior

<kbd>![image](https://user-images.githubusercontent.com/32310561/224857971-1ea598b1-e76a-41de-b93f-d05e9dbc9365.png)</kbd>








[storybookOfficialDocReact]: https://storybook.js.org/docs/react/get-started/install
[testingLibrarDomLibrary]: https://www.npmjs.com/package/@testing-library/dom
[MarkDownParaQueSeUtiliza]: https://tutorialmarkdown.com/utilidad-markdown
[MarkDownQueEs]: https://tutorialmarkdown.com/markdown
[MDSintaxBasic]: https://tutorialmarkdown.com/sintaxis
[MDSintaxAdvance]: https://tutorialmarkdown.com/sintaxis-extendida
[MDSintaxExtra]: https://tutorialmarkdown.com/consejos
[reactMarkdown]:https://github.com/remarkjs/react-markdown


