import Image from "next/image";
import styles from "./Info.module.css";

interface InfoProps {
  name: string;
  caption: string;
  facultyImg: string;
}

export default function Info({ name, caption, facultyImg }: InfoProps) {
  return (
    <div className={styles.infoContainer}>
      <h1>{name}</h1>
      <p>{caption}</p>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={facultyImg}
          width={390}
          height={145}
          alt="Utu logo"
        />
      </div>
    </div>
  );
}
