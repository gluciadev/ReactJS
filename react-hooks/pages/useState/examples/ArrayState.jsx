import React, { useState } from 'react'

export const ArrayState = () => {

// ----------- DEFINIMOS UN STATE DE TIPO ARRAY
const [numeros, setNumeros] = useState([1,2,3,4,5,6])


const handleMultiplicarArray = ()=>{

    // OPTION 1
    const copyNumeros = structuredClone(numeros)
    const newData = copyNumeros.map((objNum)=>objNum*2)
    setNumeros(newData)

    // OPTION 2
    // setNumeros((actualData)=>actualData.map(obj => obj*2))

}



const handleAddNum = () => {

    // OPTION 1 
    const newData = [...numeros,Math.floor(Math.random() * 100)]
    setNumeros(newData)

    // OPTION 2
    // setNumeros((actualData)=>[...actualData,Math.floor(Math.random() * 100)])

    // OPTION 3
    // const copyNumeros = structuredClone(numeros)
    // copyNumeros.push(Math.floor(Math.random() * 100))
    // setNumeros(copyNumeros)

    //OPTION 4
    // setNumeros((actualData)=>{
    //     const copyNumeros = structuredClone(actualData)
    //     copyNumeros.push(Math.floor(Math.random() * 100))
    //     return copyNumeros
    // })

}



const dataOfArray = numeros.map((objPersona) => <>{objPersona} </>)


return (
<>
    <h2>Array actual</h2>
    <br></br>
    {dataOfArray}
    <br></br>
    <br></br>
    <button onClick={()=>handleMultiplicarArray()}>Multiplicar por dos</button>
    {/* <br></br> */}
    <button onClick={()=>handleAddNum()}>Añadir un numero</button>
</>
)
}
