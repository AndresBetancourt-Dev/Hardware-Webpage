import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import HomeVideo from "../components/HomeVideo";
import AccordionList from "../components/AccordionList";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Una página que ilustra todo lo visto en curso de Mantenimiento y Ensamble de Hardware"
        />
      </Head>
      <div className={styles.Container}>
        <HomeVideo />
        <div className={styles.ContentContainer}>
          <h2></h2>
          <AccordionList />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
