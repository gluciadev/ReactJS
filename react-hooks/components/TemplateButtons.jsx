import Link from 'next/link'
import React from 'react'
import styles from "@/styles/Home.module.css";


const TemplateButtons = () => {
  return (
    <div className={styles.description}>
        <Link href="/">
          <p>HOME</p>
        </Link>

        <a href="https://documentation-gl.gitbook.io/doc/v/react-js/react-hooks">
          <p>DOCUMENTACIÓN GITBOOK</p>
        </a>
      </div>
  )
}

export default TemplateButtons