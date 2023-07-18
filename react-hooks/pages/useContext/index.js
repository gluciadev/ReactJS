import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import TemplateButtons from "@/components/TemplateButtons";

const useContext = () => {
  return (
    <main className={styles.mainComponent}>
      <div className={styles.componentWrap}>
        {/* CONTENIDO CORRESPONDIENTE AL HOOK DE REACT */}




      </div>
      <TemplateButtons></TemplateButtons> 
      
    </main>
  );
};

export default useContext;
