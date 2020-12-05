import React from "react";
import styles from "../styles/Ram.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import NavComponents from "../components/navComponents";
const Ram = () => {
  return (
    <Layout>
      <Head>
        <title>Componentes</title>
        <meta name="description" content="RAM de un computador" />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Cuadro}>
          <div className={styles.title}>
            <span>Memoria RAM</span>
          </div>

          <div className={styles.textoParrafo}>
            <p>
              La RAM se cargan todas las instrucciones que ejecuta la unidad
              central de procesamiento (procesador) y otras unidades del
              computador, además de contener los datos que manipulan los
              distintos programas.
            </p>
          </div>
          <NavComponents />
        </div>
        <div className={styles.Cuadro2}>
          <Image src="/img/memoriaRAM.gif" width={600} height={556} />
        </div>
      </div>
    </Layout>
  );
};

export default Ram;
