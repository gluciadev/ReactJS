import React, { useState } from 'react'

const BasicUse = () => {

  const [nombre, setNombre] = useState("Acrux")

  return (
  <>
        Nombre actual: {nombre} 
        <br></br>
        <br></br>
        <div>
        <button onClick={()=>setNombre("Paula")}>Cambiar a Paula</button> 
        <button onClick={()=>setNombre("Guille")}>Cambiar a Guille</button> 
        </div>
  </>
  )
}

export default BasicUse