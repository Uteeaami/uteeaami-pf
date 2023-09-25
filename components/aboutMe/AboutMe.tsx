import styles from "./AboutMe.module.css";
import Image from "next/image";

interface AboutMeProps {
  data: any;
}

export default function AboutMe({ data }: AboutMeProps) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.infoContainer}>
        <h1>{data?.name}</h1>
        <p>{data?.caption}</p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={data?.faculty?.data?.attributes?.url}
            width={390}
            height={145}
            alt="Utu logo"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        {data?.text.map((item: { header: string; text: string }) => (
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
