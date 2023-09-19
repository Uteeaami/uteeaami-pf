import styles from "./AboutMe.module.css";
import Info from "./info/Info";
import About from "./about/About";

interface AboutMeProps {
  data: any;
}

export default function AboutMe({ data }: AboutMeProps) {
  return (
    <div className={styles.pageContainer}>
      <Info
        name={data?.name}
        caption={data?.caption}
        facultyImg={data?.faculty?.data?.attributes?.url}
      ></Info>
      <About text={data?.text}></About>
    </div>
  );
}
