import styles from "./About.module.css";

interface AboutProps {
  text: any;
}

export default function About({ text }: AboutProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      {text.map((item: { header: string; text: string }) => (
        <div className={styles.textContainer} key={item.header}>
          <h2>{item.header}</h2>
          {item.text.split("\n").map((phrase: string, index: number) => (
            <p key={index}>{phrase}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
