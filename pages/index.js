import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import HomeVideo from "../components/HomeVideo";
import Head from "next/head";
import HomeSubjects from "../components/HomeSubjects";

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
        <HomeSubjects />
      </div>
    </Layout>
  );
};

export default Home;
