"use client"

import { useEffect, useRef } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const iframeRef = useRef(null);

  const sendMessage = () => {
    console.log('부모야');
    try {
      window.parent.postMessage({
        type: 'TEST_MESSAGE',
        data: '난 자식이야'
      }, '*');
      console.log('완료');
    } catch (error) {
      console.error('실패:', error);
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
        sandbox="allow-same-origin allow-scripts"
        allowFullScreen
        onLoad={() => console.log('iframe 로드 완료')}
      />
    </div>
  );
}
