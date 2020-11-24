import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Calculator.module.css";
import Head from "next/head";

const Calculator = () => {
  return (
    <Layout>
      <Head>
        <title>Calculadora</title>
        <meta name="description" content="Calculadora de Circuitos" />
      </Head>
      <div className={styles.Container}>
        <h1 className={styles.Title}>Calculadora</h1>
      </div>
    </Layout>
  );
};

export default Calculator;
