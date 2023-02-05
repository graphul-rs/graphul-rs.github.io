import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `async fn handle_socket(mut socket: WebSocket) {
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
}`;

class Websockets extends Component {
  render() {
    return (
      <section className="generic-block faint reverse">
        <div className="mid">
          <div className="right">
            <h3>WebSocket Support</h3>
            <p>
              Use the power of <strong>WebSockets</strong> in your Graphul app!
              Build fast interactive user experiences with performance and
              scalability guaranteed.
            </p>
          </div>
          <div className="left">
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>
        </div>
      </section>
    );
  }
}

export default Websockets;
