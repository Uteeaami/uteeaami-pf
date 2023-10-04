import styles from "./Carousel.module.css";
import { useState, useEffect, useRef, Key } from "react";
import useWindowDimensions, { WindowDimensions } from "../../../functions/useWindowDimensions";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface CarouselProps {
  header: string;
  images: any;
}

export default function CarouselReel({ header, images }: CarouselProps):JSX.Element | null {
  const [index, setIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay: number = 10000;
  const { height, width } = useWindowDimensions() as WindowDimensions;

  const groupedImages: {id: string; images: string[]}[] = [];
  let maxItemsToShow: number = 6;
  if (width <= 768) {
    maxItemsToShow = 4;
  }

  for (let i = 0; i < images.length; i += maxItemsToShow) {
    const group = {
      id: uuidv4(),
      images: images.slice(i, i + maxItemsToShow),
    };
    groupedImages.push(group);
  }

  function resetTimeout(): void {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex: number) =>
          prevIndex === groupedImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, groupedImages.length]);

  return (
    <div className={styles.slideshowContainer}>
      <p>{header}</p>
      <div className={styles.slideshow}>
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {groupedImages.map((group: { id: Key; images: any[] }) => (
            <div key={group.id} className={styles.slideGroup}>
              {group.images.map(
                (image: { id: Key; attributes: { url: string } }) => (
                  <Image
                    className={styles.image}
                    key={image.id}
                    src={image.attributes.url}
                    alt={`Image ${image.id}`}
                    width={60}
                    height={60}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.slideshowDotsContainer}>
        <div className={styles.slideshowDots}>
          {groupedImages.map((item: { id: Key }, idx: number) => (
            <div
              key={item.id}
              className={`${styles.slideshowDot} ${
                index === idx ? styles.selectedDot : ""
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
