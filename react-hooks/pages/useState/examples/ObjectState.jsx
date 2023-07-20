import React, { useState } from 'react'

const ObjectState = () => {

// ----------- DEFINIMOS UN STATE OBJECT
    const [persona, setPersona] = useState({
        nombre:"Guille",
        edad:28
    })

// ----------- ELIMINAMOS UN ELEMENTO DEL STATE OBJECT
    const handleEliminarNombre = ()=>{
        setPersona((actualData)=>{
            const newObjData = structuredClone(actualData)
            delete newObjData.nombre
            return newObjData
        })
    }

// ----------- MODIFICAMOS UN ELEMENTO DEL STATE OBJECT
    const handleCambiarEdad = ()=>{
        setPersona({...persona,edad:Math.floor(Math.random() * 32)})
        
    }

// ----------- AÑADIMOS UN ELEMENTO AL STATE OBJECT
    const handleAñadirNombre = ()=>{
        setPersona({...persona,nombre:"Guille"})
    }


  return (
    <>
        <h2>Objeto actual</h2>
        <br></br>
        Nombre : {persona.nombre}
        <br></br>
        Edad  : {persona.edad}
        <br></br>
        <br></br>
        { persona.nombre && <button onClick={()=>handleEliminarNombre()}>Eliminar Nombre</button>}
        {!persona.nombre && <button onClick={()=>  handleAñadirNombre()}>Añadir   Nombre</button>}
        <button onClick={()=>handleCambiarEdad()}>Cambiar Edad</button>
    </>
  )
}

export default ObjectState