import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import TemplateButtons from "@/components/TemplateButtons";
import ComponentUseContext from "./ComponentUseContext";
import { ContextAppProvider } from "./contextExample/ContextAppProvider";

const useContext = () => {
  return (
    <main className={styles.mainComponent}>
      <div className={styles.componentWrap}>
      {/* CONTENIDO CORRESPONDIENTE AL HOOK DE REACT */}
      
      <ContextAppProvider>
          <ComponentUseContext></ComponentUseContext>
      </ContextAppProvider>



      </div>
      <TemplateButtons></TemplateButtons> 
      
    </main>
  );
};

export default useContext;
