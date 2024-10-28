"use client"

import { useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const getCookie = () => {
    console.log(document.cookie);
  }

  const sendMessage = () => {
    console.log('1')
    const iframe = document.getElementById('ifid');
    iframe.contentWindow.postMessage('부모한테 보냄', 'https://www.minsoku.shop');
  };
  return (
    <div className={styles.page}>
      iframe 페이지
      <button onClick={sendMessage}>부모야</button>
      <div style={{ padding: '20px' }} />
      <iframe
        id="ifid"
        src="https://www.minsoku.shop"
        width="100%"
        height="500"
        allowFullScreen
      />
      <button onClick={() => getCookie()}>쿠키 쿠키</button>
    </div>
  );
}
