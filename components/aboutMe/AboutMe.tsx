import styles from "./AboutMe.module.css";
import Image from "next/image";

interface AboutMeProps {
  name: string;
  caption: string;
  imgUrl: string;
  textItem: [];
}

export default function AboutMe({ name, caption, imgUrl, textItem }: AboutMeProps):JSX.Element | null {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.infoContainer}>
        <h1>{name}</h1>
        <p>{caption}</p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={imgUrl}
            width={390}
            height={145}
            alt="Utu logo"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        {textItem.map((item: {header: string; text: string;}) => (
          <div className={styles.textContainer} key={item.header}>
            <h2>{item.header}</h2>
            {item.text.split("\n").map((phrase: string, index: number) => (
              <p key={index}>{phrase}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
