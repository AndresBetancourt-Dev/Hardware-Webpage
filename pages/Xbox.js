import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Xbox.module.css";
import XboxVideo from "../components/XboxVideo";
import XboxDescription from "../components/XboxDescription";
import Head from "next/head";

const Xbox = () => {
  return (
    <Layout>
      <Head>
        <title>Xbox</title>
        <meta
          name="description"
          content="La propuesta de realizar mantenimiento a una de las consolas más potentes del mercado."
        />
      </Head>
      <div className={styles.Container}>
        <XboxVideo />
        <XboxDescription />
      </div>
    </Layout>
  );
};

export default Xbox;
