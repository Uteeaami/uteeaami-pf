import CarouselReel from "../aboutMe/carousel/CarouselReel";
import styles from "./AboutMePage.module.css";
import AboutMe from "../aboutMe/AboutMe";
import Image from "next/image";

interface FacultyItem {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface PortraitItem {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface ReelItem {
  header: string;
  technologies: {
    data: Array<object>;
  };
}

interface PageProps {
  data: {
    name: string;
    caption: string;
    faculty: FacultyItem;
    text: [];
    portrait: PortraitItem;
    reel: ReelItem;
  };
}

export default function AboutMePage({ data }: PageProps): JSX.Element | null {
  const portraitUrl: string = data?.portrait?.data?.attributes?.url;

  return (
    <div className={styles.aboutMePageContainer}>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutContainer}>
          <AboutMe
            name={data?.name}
            caption={data?.caption}
            imgUrl={data?.faculty?.data?.attributes?.url}
            textItem={data?.text}
          ></AboutMe>
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
