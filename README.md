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
  
  
  
## DOCUMENTAR NUESTROS COMPONENTES - BASIC

Lo primero es enteder a que nivel del `Path`funciona `Storybook` 

Ahora veremos son las entradas de texto plano que nos permite tener `Storybook` como por ejemplo:
 <kbd>![image](https://user-images.githubusercontent.com/32310561/224542739-80c8e491-b415-4552-a3cb-60257700433b.png) </kbd>
 
 


Vamos a ver ejemplos basicos de como documentar nuestros componentes para que salgan correctamente en `Storybook`.

Empecemos con un componente de React como puede ser un `Button.jsx`

```javascript
  export const ButtonPG = ({setState,label="Cambiar a"})=>{

    const nombres = ["guille","pau"]


return(
    <>
    <button onClick={()=>setState(nombres[0])}>{label} Guille</button>
    <button onClick={()=>setState(nombres[1])}>{label} Paula</button>
    </>
)}

```
Tenemos un componente que muestra dos botones. Cada uno de ellos va a modificar el estado `setState` que se le pasa por porps en el componente padre poniendo "Guille" o "Paula" en funcion del boton que pulsemos. 
Como extra hemos añadido un `label` para el texto que queremos que salga en el boton



https://betterprogramming.pub/6-ways-to-configure-global-styles-for-storybook-faa1517aaf1a#c26c







[storybookOfficialDocReact]: https://storybook.js.org/docs/react/get-started/install
[testingLibrarDomLibrary]: https://www.npmjs.com/package/@testing-library/dom
[MarkDownParaQueSeUtiliza]: https://tutorialmarkdown.com/utilidad-markdown
[MarkDownQueEs]: https://tutorialmarkdown.com/markdown
[MDSintaxBasic]: https://tutorialmarkdown.com/sintaxis
[MDSintaxAdvance]: https://tutorialmarkdown.com/sintaxis-extendida
[MDSintaxExtra]: https://tutorialmarkdown.com/consejos
[reactMarkdown]:https://github.com/remarkjs/react-markdown


