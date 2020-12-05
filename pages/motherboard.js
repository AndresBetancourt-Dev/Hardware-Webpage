import React from "react";
import styles from "../styles/Motherboard.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import NavComponents from "../components/navComponents";
const Motherboard = () => {
  return (
    <Layout>
      <Head>
        <title>Componentes</title>
        <meta name="description" content="Componentes de un computador" />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Cuadro}>
          <div className={styles.title}>
            <span>Motherboard</span>
          </div>

          <div className={styles.textoParrafo}>
            <p>
              La placa base también conocida como tarjeta madre, placa madre o
              placa principal una tarjeta de circuito impreso a la que se
              conectan los componentes que constituyen la computadora.
            </p>
          </div>
          <NavComponents />
        </div>
        <div className={styles.Cuadro2}>
          <Image src="/img/motherboard2.gif" width={600} height={556} />
        </div>
      </div>
    </Layout>
  );
};

export default Motherboard;
