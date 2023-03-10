

const paciente = ({ children, setPaciente, eliminarPaciente }) => {
    
    

    const {nombre, propietario, email, fecha, sintomas, id} = children;


    function Eliminar(){
        const confirmacion = confirm('¿Desea eliminar este Paciente? '+ nombre);

        if(confirmacion){
            eliminarPaciente(id);
        }
    }


  return (
    
    <div className="bg-white px-5 py-10 rounded-lg mx-5 shadow-md my-3">
        <p className="font-bold mb-5 text-pink-700 uppercase">
            Nombre: {''} <span className="font-normal normal-case text-gray-700">{nombre}</span>
        </p>

        <p className="font-bold mb-5 text-pink-700 uppercase">
            Propietario: {''} <span className="font-normal normal-case text-gray-700"> {propietario} </span>
        </p>

        <p className="font-bold mb-5 text-pink-700 uppercase">
            E-mail: {''} <span className="font-normal normal-case text-gray-700"> {email} </span>
        </p>

        <p className="font-bold mb-5 text-pink-700 uppercase">
            Fecha de Alta: {''} <span className="font-normal normal-case text-gray-700"> {fecha} </span>
        </p>

        <p className="font-bold mb-5 text-pink-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case text-gray-700">
                {sintomas}
            </span>
        </p>

        <div className="flex gap-3">
            <button 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPaciente(children)}
            type="button">
                Editar
                </button>

            <button className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg" 
            type="button"
            onClick={() => Eliminar()}
            > Eliminar</button>
        </div>
    </div> 
    
  )
}

export default paciente
