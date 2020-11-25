import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Smartphone.module.css";

const Smartphone = () => {
  return (
    <Layout>
      <div className={styles.Container}>
        <div className={styles.Item}>
          <Image
            src="/images/Subjects/SmartPhone.gif"
            alt={"Smartphone"}
            layout={"responsive"}
            width={100}
            height={100}
            className={styles.Image}
            loading={"lazy"}
          />
        </div>
        <div className={styles.Item}>
          <h1 className={styles.Title}>Mantenimiento de Móviles</h1>
          <p className={styles.Text}>
            El propósito es hacer el mantenimiento a un dispositivo móvil
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Smartphone;
