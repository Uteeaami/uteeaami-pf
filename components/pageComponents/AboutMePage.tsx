import CarouselReel from "../aboutMe/carousel/CarouselReel";
import styles from "./AboutMePage.module.css";
import AboutMe from "../aboutMe/AboutMe";
import Image from "next/image";

interface PageProps {
  data: any;
}

export default function AboutMePage({ data }: PageProps) {
  const portraitUrl = data?.portrait?.data?.attributes?.url;

  return (
    <div className={styles.aboutMePageContainer}>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutContainer}>
          <AboutMe data={data}></AboutMe>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={portraitUrl}
            width={500}
            height={500}
            alt="Portrait"
          ></Image>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <CarouselReel
          header={data?.reel?.header}
          images={data?.reel?.technologies?.data}
        ></CarouselReel>
      </div>
    </div>
  );
}
