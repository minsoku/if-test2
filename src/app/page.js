"use client"

import { useEffect, useRef } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const iframeRef = useRef(null);

  const sendMessage = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage('부모한테 보냄', 'https://www.minsoku.shop');
    }
  };

  return (
    <div className={styles.page}>
      iframe 페이지
      <button onClick={sendMessage}>부모야</button>
      <div style={{ padding: '20px' }} />
      <iframe
        ref={iframeRef}
        src="https://www.minsoku.shop"
        width="100%"
        height="500"
        allowFullScreen
        onLoad={() => console.log('iframe 로드 완료')}
      />
    </div>
  );
}
