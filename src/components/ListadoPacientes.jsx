import Paciente from "./Paciente"

import {useEffect} from 'react';


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente }) => {

  /** MOSTRAR UNA ALERTA CADA VEZ QUE SE INSERTA UN NUEVO REGISTRO */
  // useEffect(() => {

  //   if(pacientes.length > 0){
  //     alert('nuevo paciente')
  //   }

  // }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
     
    { pacientes && pacientes.length ? 
      (
        <>
          <h2 className="font-black text-3xl text-center text-green-600">Lista de Pacientes</h2>

          <p className="text-center text-xl my-5 ">
            Administra tus {' '}
            <span className="text-pink-600 font-bold"> Pacientes y Citas</span>
          </p>

          {
            pacientes.map((paciente) => {


              return (
                <Paciente key={paciente.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}>
                  {paciente}
                </Paciente>
              )
            })
          }
        </>

      ) : (

        <>
          <h2 className="font-black text-3xl text-center text-green-600">No hay Pacientes</h2>

          <p className="text-center text-xl my-5 ">
            Administra tus {' '}
            <span className="text-pink-600 font-bold"> Pacientes y Citas</span>
          </p>
        
        </>
      )
    }


    </div>
  )
}

export default ListadoPacientes
