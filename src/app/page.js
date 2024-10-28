"use client"

import { useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const getCookie = () => {
    console.log(document.cookie);
  }

  const sendMessage = () => {
    const iframe = document.getElementById('ifid');
    iframe.contentWindow.postMessage('부모한테 보냄', 'https://www.minsoku.shop');
  };
  return (
    <div className={styles.page}>
      iframe 페이지
      <button onClick={sendMessage}>부모야</button>
      <iframe
        id="ifid"
        src="https://minsoku.shop"
        width="100%"
        height="500"
        allowFullScreen
        border='none'
      />
      <button onClick={() => getCookie()}>쿠키 쿠키</button>
    </div>
  );
}
