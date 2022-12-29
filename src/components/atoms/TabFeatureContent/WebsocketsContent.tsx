import React from 'react'
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';

const WebsocketsContent = () => {
    return (<div className={clsx('row')}>
        <div className={clsx('col col--6')}>
            <h1>WebSocket Support</h1>
            <p>Use the power of WebSockets in your Graphul app! Build fast interactive user experiences with performance and scalability guaranteed.</p>
        </div>
        <div className={clsx('col col--6')} >
            <CodeBlock language="rust">
                {`async fn handle_socket(mut socket: WebSocket) {
    if let Some(msg) = socket.recv().await {
      if let Ok(msg) = msg {
        match msg {
          Message::Text(t) => {
            println!("client sent str: {:?}", t);
          }
          Message::Binary(_) => {
            println!("client sent binary data");
          }
          Message::Ping(_) => {
            println!("socket ping");
          }
          Message::Pong(_) => {
            println!("socket pong");
          }
          Message::Close(_) => {
            println!("client disconnected");
            return;
          }
        }
      } else {
          println!("client disconnected");
          return;
      }
    }
  
    loop {
      if socket
        .send(Message::Text(String::from("Hi!")))
        .await
        .is_err()
      {
        println!("client disconnected");
        return;
      }
      tokio::time::sleep(std::time::Duration::from_secs(3)).await;
    }
  }`}
            </CodeBlock>
        </div>
    </div >)
}


export default WebsocketsContent;