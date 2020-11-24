import AccordionList from "../components/AccordionList";
import styles from "../styles/Home.module.css";
import Subject from "./Subject";

const HomeSubjects = () => {
  return (
    <div className={styles.ContentContainer} id="temas">
      <h2 className={styles.Title}>Temas</h2>
      <div className={styles.SubjectContainer}>
        {items.map((item) => (
          <Subject
            key={item.key}
            image={item.image}
            title={item.title}
            alternative={item.title}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSubjects;

const items = [
  {
    key: "1",
    title: "Mantenimiento Xbox",
    path: "/Xbox",
    image: "/images/Subjects/Xbox.png",
  },
  {
    key: "2",
    title: "Mantenimiento Celulares",
    path: "/Smartphone",
    image: "/images/Subjects/Smartphone.gif",
  },
  {
    key: "3",
    title: "Programar Calculadora",
    path: "/Calculator",
    image: "/images/Subjects/Calculadora-neon.png",
  },
];
