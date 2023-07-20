
import { useState } from "react";

export const InternalValueState = ()=>{
     
      const [countNumber, setCountNumber] = useState(0)
      
//----------------------------------------- Este ejemplo no funcionaria por que el countNumber
//                                          no actualiza el valor hasta que se renderiza de
//                                          nuevo el componente.
      const handleSumNumberDosError = ()=>{                                                               
        setCountNumber(countNumber+1)                                                                
        setCountNumber(countNumber+1)                                                                
      }
      
/*     LO QUE REALMENTE LEE EL CODIGO ❌:
       setCountNumber(0 + 1) --> el nuevo valor es 1 
       setCountNumber(0 + 1) --> el nuevo valor es 1  
*/

//----------------------------------------- Para poder acceder al valor que tiene en cola por 
//                                          actualizar tenemos que utilizar la funcion interna
//                                          como se muestra en el ejemplo.

      const handleSumNumberDos = ()=>{                                                                
        setCountNumber(countNumber+1)
        setCountNumber((valorDelStateActual)=>valorDelStateActual+1)
      }
      
/*     LO QUE REALMENTE LEE EL CODIGO ✔️:
       setCountNumber(0 + 1) --> el nuevo valor es 1 
       setCountNumber( (1) => 1 + 1) --> el nuevo valor es 2  
*/

      return (
        <>
          
          Numero: {countNumber}
          <br></br>
          <br/>
          <button onClick={()=>handleSumNumberDos()}>Sumar de dos en dos</button>
          <button onClick={()=>handleSumNumberDosError()}>Intento de sumar de dos en dos (no funciona)</button>
        </>
      );
}  
