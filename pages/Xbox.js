import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Xbox.module.css";
import XboxVideo from "../components/XboxVideo";
import XboxDescription from "../components/XboxDescription";

const Xbox = () => {
  return (
    <Layout>
      <div className={styles.Container}>
        <XboxVideo />
        <XboxDescription />
      </div>
    </Layout>
  );
};

export default Xbox;
