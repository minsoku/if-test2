"use client"

import { useEffect } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const sendMessage = () => {
    const iframe = document.getElementById('ifid');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage('부모한테 보냄', 'https://www.minsoku.shop');
    }
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
    </div>
  );
}
