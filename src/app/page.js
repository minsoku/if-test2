import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      iframe 테스트 2번
      <iframe
        src="https://minsoku.shop"
        width="100%"
        height="500"
        allowfullscreen
        sandbox
      />
    </div>
  );
}
