import React from "react";
import styles from "../styles/Keyboard.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import NavComponents from "../components/navComponents";
const Keyboard = () => {
  return (
    <Layout>
      <Head>
        <title>Teclado</title>
        <meta name="description" content="Teclado del computador" />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Cuadro}>
          <div className={styles.title}>
            <span>Teclado</span>
          </div>

          <div className={styles.textoParrafo}>
            <p>
              El teclado es un dispositivo o periférico de entrada, en parte
              inspirado en el teclado de las máquinas de escribir, que utiliza
              un sistema de botones o teclas, para que actúen como palancas
              mecánicas o interruptores electrónicos que envían toda la
              información a la computadora o al teléfono móvil.
            </p>
          </div>
          <NavComponents />
        </div>
        <div className={styles.Cuadro2}>
          <Image src="/img/teclado.gif" width={600} height={556} />
        </div>
      </div>
    </Layout>
  );
};

export default Keyboard;
