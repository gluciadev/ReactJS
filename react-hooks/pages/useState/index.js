import React from "react";
import styles from "@/styles/Home.module.css";
import TemplateButtons from "@/components/TemplateButtons";
import BasicUse from "./examples/BasicUse";
import ObjectState from "./examples/ObjectState";
import { ArrayState } from "./examples/ArrayState";
import { InternalValueState } from "./examples/InternalValueState";

const useContext = () => {

//---------------  Para ver otros ejemplos descomentar los componentes comentados en el RETURN

  return (
    <main className={styles.mainComponent}>
      <div className={styles.componentWrap}>
        <BasicUse></BasicUse>
        {/* <ObjectState></ObjectState> */}
        {/* <ArrayState></ArrayState> */}
        {/* <InternalValueState></InternalValueState> */}





      </div>
      <TemplateButtons></TemplateButtons> 
      
    </main>
  );
};

export default useContext;
