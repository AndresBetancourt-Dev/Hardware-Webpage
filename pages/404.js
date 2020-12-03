import Layout from "../components/Layout";
import Button from "../components/Button";
import styles from "../styles/Error.module.css";

const Error = () => {
  return (
    <Layout>
      <Head>
        <title>Error</title>
        <meta name="description" content="Hubo un error" />
      </Head>
      <div className={styles.Container}>
        <h1 className={styles.Title}>¡Error! Página no encontrada</h1>
        <Button path={"/"} title={"Home"} />
      </div>
    </Layout>
  );
};

export default Error;
