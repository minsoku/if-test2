"use client"

import { useEffect, useRef, useState } from 'react';
// import styles from "./page.module.css";

export default function Home() {
  const iframeRef = useRef(null);
  const [message, setMessage] = useState('');
  const [pMessage, setPMessage] = useState('');
  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin === "https://www.minsoku.shop") {
        setMessage(event.data.data);
      }
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
        data: pMessage
      }, 'https://www.minsoku.shop');
      console.log('(부모) : 완료');
    } catch (error) {
      console.error('(부모) : 실패:', error);
    }
  };

  return (
    <div>
      여기가 부모페이지임
      <input placeholder='자식에게 하고 싶은 말' onChange={event => setPMessage(event.target.value)}  />
      <button onClick={sendMessage}>자식에게 하고 싶은 말</button>
      <div style={{ padding: '5px' }} />
      <div>자식이 보낸 말 : {message}</div>
      <div style={{ padding: '5px' }} />
      <iframe
        ref={iframeRef}
        src="https://www.minsoku.shop"
        width="100%"
        height="100%"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        allowFullScreen
        onLoad={() => console.log('iframe 로드 완료')}
        style={{ border: 'none' }}
      />
    </div>
  );
}
