import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `
#[tokio::main]
async fn main() {
  let mut app = Graphul::new();

  app.get("/", || async {
      "hello world!"
  });
  // 1000 requests per 10 seconds max
  app.middleware(RateLimitLayer::new(
    1000,
    std::time::Duration::from_secs(10)
  ));

  app.run("127.0.0.1:8000").await;
}
}`;

class RateLimiterBlock extends Component {
  render() {
    return (
      <div className="generic-block">
        <div className="mid">
          <div className="left">
            <h3>Rate Limiter</h3>
            <p>
              With Graphul, limiting repeated requests to public APIs and
              endpoints is very simple. No more abusive requests!
            </p>
          </div>
          <div className="right">
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default RateLimiterBlock;
