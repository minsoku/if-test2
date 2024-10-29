"use client"

import { useEffect, useRef } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const receiveMessage = (event) => {
      console.log('자식: 부모한테 메시지 받음', event);
    };
  
    window.addEventListener('message', receiveMessage);
  
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

  const sendMessage = () => {
    console.log('부모야');
    try {
      iframeRef.current.contentWindow.postMessage({
        type: 'TEST_MESSAGE',
        data: '난 자식이야'
      }, 'https://www.minsoku.shop');
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
        sandbox="allow-same-origin allow-script"
        allowFullScreen
        onLoad={() => console.log('iframe 로드 완료')}
      />
    </div>
  );
}
