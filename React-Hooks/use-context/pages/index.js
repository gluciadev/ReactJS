import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useContext } from 'react'
import { NombreContext } from '@/context/ContextApp'


export default function Home() {

  const {nombre,llamadaConsole} = useContext(NombreContext)

  llamadaConsole() //Funcion que viene del context  y podemos usar en otros componentes

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Hola {nombre} {/* Nombre sacado del context */}
        
      </main>
    </>
  )
}
