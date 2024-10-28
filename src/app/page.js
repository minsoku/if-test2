"use client"

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const getCookie = () => {
    console.log(document.cookie);
  }
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
      <button onClick={() => getCookie()}>쿠키 쿠키</button>
    </div>
  );
}
