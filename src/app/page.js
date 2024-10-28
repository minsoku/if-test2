"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log('iframe페이지', document.cookie);
  return (
    <div className={styles.page}>
      iframe 페이지
      <iframe
        src="https://minsoku.shop"
        // src="http://localhost:3001"
        width="100%"
        height="500"
        allowFullScreen
      />
    </div>
  );
}
