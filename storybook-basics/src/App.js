import { useState } from "react";
import { ButtonPG } from "./components/Button";

function App() {

const [nombre, setNombre] = useState("")

  return (
    <>
    {nombre}
    <br></br>
      <ButtonPG setState={setNombre}></ButtonPG>
    </>
  );
}

export default App;
