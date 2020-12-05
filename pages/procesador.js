import React from "react";
import styles from "../styles/Processor.module.css";
import Image from "next/image";
import Layout from "../components/Layout";
import Head from "next/head";
import NavComponents from "../components/navComponents";
const Procesador = () => {
  return (
    <Layout>
      <Head>
        <title>Procesador</title>
        <meta name="description" content="Procesador del computador" />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Cuadro}>
          <div className={styles.title}>
            <span>Procesador</span>
          </div>

          <div className={styles.textoParrafo}>
            <p>
              El trabajo del procesador es interpretar las instrucciones de un
              programa informático mediante la realización de las operaciones
              básicas aritméticas, lógicas y externas (provenientes de la unidad
              de entrada/salida).
            </p>
          </div>
          <NavComponents />
        </div>

        <div className={styles.Cuadro2}>
          <Image src="/img/procesador.gif" width={800} height={570} />
        </div>
      </div>
    </Layout>
  );
};

export default Procesador;
