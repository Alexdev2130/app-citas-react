import { useState, useEffect } from "react"
import Error from "./error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    function generarId(){
        const math = Math.random().toString(36).substr(2) 
       const fecha = Date.now().toString(36)

       return math + fecha;
    }

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");


    const [error, setError] = useState(false);

    useEffect(()=>{
        if (Object.keys(paciente).length > 0){

            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)



        }
    }, [paciente])
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        if( [nombre, propietario, email, fecha, sintomas].includes('') ){
            setError(true);
            
            return;
        }

        setError(false)


        const Objpaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id){
            //EDITAR REGISTRO

            Objpaciente.id = paciente.id;
            console.log(Objpaciente)


            const pacienteUpt = pacientes.map( pacienteState => pacienteState.id === paciente.id ? Objpaciente : pacienteState)

            setPacientes(pacienteUpt)
            setPaciente({})
        }else{
            //NUEVO REGISTRO

            //creamos la propiedad id y le asignamos el id
            Objpaciente.id = generarId();

            //guardamos
            setPacientes([...pacientes, Objpaciente])
        }

       

        //REINICIAR FORMULARIO

        setNombre('');
        setPropietario('');
        setFecha('');
        setEmail('');
        setSintomas('');
    }


 
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

        <h2 className="font-black text-green-600 text-3xl text-center">Seguimiento de Pacientes</h2>

        <p className="text-xl mt-5 text-center">Añade Pacientes y {''} 
            <span className="text-pink-600 font-bold ">Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded-md py-10 px-5 mt-5 mb-10 md:mx-auto mx-5" action="" method="POST">
            
            { /** VALIDACIÓN */ }
            {error &&  <Error> Todos los campos son obligatorios</Error> }

            <div className="md:grid md:grid-cols-2 md:gap-x-6 gap-y-3 ">
                <div className="mx-auto my-3">
                      <label className="block text-gray-500 font-medium " htmlFor="nombre_mascota">Nombre de <span className="block text-pink-700 uppercase">Mascota:</span> </label>
                      <input value={nombre}  onChange={ (e)=>{setNombre(e.target.value)} } className="border w-full mt-2 p-2 placeholder-gray-400 rounded-md" type="text" id="nombre_mascota" placeholder="Nombre de la Mascota"   />
                </div>

                <div className="mx-auto my-3">
                    <label className="block text-gray-500 font-medium " htmlFor="nombre_dueño">Nombre de <span className="block text-pink-700 uppercase">Propietario</span></label>
                    <input value={propietario}  onChange={ (e)=>{setPropietario(e.target.value)} }  className="border w-full mt-2 p-2 placeholder-gray-400 rounded-md" type="text" id="nombre_dueño" placeholder="Nombre del Propietario" />
                </div>

                <div className="mx-auto my-3">
                    <label className="block text-gray-500 font-medium " htmlFor="email">E-mail de <span className="block text-pink-700 uppercase">Contacto</span></label>
                    <input value={email}  onChange={ (e)=>{setEmail(e.target.value)} }  className="border w-full mt-2 p-2 placeholder-gray-400 rounded-md" type="email" id="email" placeholder="E-mail del Propietario" />
                </div>

                <div className="mx-auto my-3">
                    <label className="block text-gray-500 font-medium " htmlFor="alta">Fecha de <span className="block text-pink-700 uppercase">Alta</span></label>
                    <input value={fecha}  onChange={ (e)=>{setFecha(e.target.value)} }  className="border w-full mt-2 p-2 placeholder-gray-400 rounded-md" type="date" id="alta"  />
                </div>

                <div className="mx-auto my-3 md:col-span-2 w-full">
                    <label className=" text-xl text-center font-medium block text-pink-700 uppercase" htmlFor="sintomas">Sintomas</label>
                    <textarea  value={sintomas}  onChange={ (e)=>{setSintomas(e.target.value)} } className="border w-full mt-2 p-2 placeholder-gray-400 rounded-md h-28 " id="sintomas" ></textarea>
                </div>
            </div>
            
                <input 
                    type="submit" 
                    className="mx-auto
                        w-full
                        text-center
                        md:w-min
                        md:flex
                        md:flex-center
                        font-bold
                        hover:cursor-pointer
                        transition-colors
                        hover:transition-colors
                        hover:bg-pink-700
                        bg-pink-600
                        uppercase
                        text-white
                        py-3 px-4 
                        rounded-sm"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} 
                />

             
        </form>
    </div>
  )
}

export default Formulario
