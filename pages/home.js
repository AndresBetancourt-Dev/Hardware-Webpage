import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import HomeVideo from "../components/HomeVideo";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <HomeVideo />
      </div>
    </Layout>
  );
};

export default Home;
