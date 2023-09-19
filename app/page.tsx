import styles from "./page.module.css";
import Page from "../components/Page";
import { fetchFromStrapi } from "../functions/FetchFromStarpi";

export default async function Home() {
  const data = await fetchFromStrapi();

  return (
    <div>
      <Page data={data?.data?.attributes}></Page>
    </div>
  );
}
