import { useState, useEffect } from 'react'

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

 const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  useEffect(()=> {

    function obtenerLS(){
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      pacientesLS.length > 0 && setPacientes(pacientesLS);
     
    }
    obtenerLS();
  },[])

  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesUpdate = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesUpdate);
  }

  return (
    <div className="container mx-auto mt-5 ">

     <Header/>
      <div className="md:flex mt-12">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
