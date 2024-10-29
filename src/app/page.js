"use client"

import { useEffect, useRef } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const receiveMessage = (event) => {
      console.log('(부모) : ', event);
    };
  
    window.addEventListener('message', receiveMessage);
  
    return () => {
      console.log('(부모) : unMount');
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

  const sendMessage = () => {
    try {
      iframeRef.current.contentWindow.postMessage({
        type: 'PARENT_MESSAGE',
        data: '사실 내가 부모네'
      }, 'https://www.minsoku.shop');
      console.log('(부모) : 완료');
    } catch (error) {
      console.error('(부모) : 실패:', error);
    }
  };

  return (
    <div className={styles.page}>
      여기가 부모페이지임
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
