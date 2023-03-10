import { useState, useEffect } from 'react';


const Error = ({children}) => {



  return (
    <div>
         <p className="my-5 p-2 rounded-md text-white bg-red-500 text-center uppercase font-bold"> {children} </p> 
    </div>
  )
}

export default Error
