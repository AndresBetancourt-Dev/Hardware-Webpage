import React from "react";
import styles from "../styles/Circuito.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import NavComponents from "../components/NavCircuito";
const Circuitos = () => {
  return (
    <Layout>
      <Head>
        <title>Circuitos</title>
        <meta name="description" content="Circuitos" />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Cuadro}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%", marginTop: 10 }}>
              <Image src="/img/circuitoserie.png" width={400} height={300} />
            </div>

            <div className={styles.textoParrafo}>
              <span className={styles.titulo}>Circuitos en serie</span>
              <p>
                Se llama circuito en serie a un tipo de circuito eléctrico
                provisto de un único camino para la corriente, que debe alcanzar
                a todos los bornes o terminales conectados en la red de manera
                sucesiva, es decir uno detrás de otro, conectando sus puntos de
                salida con el de entrada del siguiente.
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.textoParrafo}>
              <span className={styles.titulo}>Circuitos en paralelo</span>
              <p>
                Se llama circuito en paralelo a una conexión de dispositivos
                eléctricos (como bobinas, generadores, resistencias,
                condensadores, etc.) colocados de manera tal que tanto los
                terminales de entrada o bornes de cada uno, como sus terminales
                de salida, coincidan entre sí.
              </p>
            </div>
            <div style={{ width: "100%", marginTop: 10 }}>
              <Image src="/img/circuitoparalelo.png" width={400} height={300} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Circuitos;
