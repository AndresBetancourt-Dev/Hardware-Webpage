import React from "react";
import styles from "../styles/Components.module.css";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
const Components = () => {
  return (
    <Layout>
      <Head>
        <title>Componentes de un PC</title>
        <meta
          name="description"
          content="Una presentación donde se evidencian los Componentes de un Computador de Mesa."
        />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Cuadro}>
          <div className={styles.Nav}>
            <div className={styles.Text}>Componentes</div>
            <Link href={"/"}>
              <a className={styles.SubText}>Motherboard</a>
            </Link>
            <Link href={"/Calculator"}>
              <a className={styles.SubText}>Disco duro</a>
            </Link>
            <Link href={"/Components"}>
              <a className={styles.SubText}>RAM</a>
            </Link>
          </div>
          <div className={styles.title}>
            <span>Motherboard</span>
          </div>

          <div className={styles.textoParrafo}>
            <div className="image-container">
              <Image src="/img/motherboard.png" width={200} height={235} />
            </div>
            <p>
              La placa base también conocida como tarjeta madre, placa madre o
              placa principal una tarjeta de circuito impreso a la que se
              conectan los componentes que constituyen la computadora.
            </p>
          </div>
        </div>
        <div className={styles.Cuadro2}>
          <div className="image-container">
            <Image src="/img/motherboard2.gif" width={600} height={556} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Components;
