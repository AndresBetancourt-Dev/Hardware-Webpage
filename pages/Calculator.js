import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Calculator.module.css";
import Head from "next/head";
import Image from "next/image";

const Calculator = () => {
  return (
    <Layout>
      <Head>
        <title>Calculadora</title>
        <meta name="description" content="Calculadora de Circuitos" />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Item}>
          <h1 className={styles.Title}>Calculadora</h1>
          <p className={styles.Text}>
            El propósito es programar una calculadora en las opciones que
            prefieran.
          </p>
          <div className={styles.Options}>
            <p className={styles.Text}>Móvil</p>
            <p className={styles.Text}>Desktop</p>
            <p className={styles.Text}>Web</p>
          </div>
          <p className={styles.Text}>
            Cuyo propósito es Calcular Resitencia, Intensidad o Voltaje en base
            a estos parámetros. <br />
          </p>
        </div>
        <div className={styles.Item}>
          <Image
            src={"/images/Subjects/calculadora-neon.png"}
            alt={"Calculadora"}
            layout={"responsive"}
            width={100}
            height={100}
            className={styles.Image}
            loading={"lazy"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Calculator;
