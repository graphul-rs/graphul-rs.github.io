import React from 'react'
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';


const RateLimitContent = () => {
    return (<div className={clsx('row')}>
        <div className={clsx('col col--6')}>
            <h1>Rate Limiter</h1>
            <p>Rate limiting is a strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe - for instance, trying to log in to an account</p>
            <p>Rate limiting can help stop certain kinds of malicious bot activity. It can also reduce strain on web servers.</p>
            <p>With Graphul, limiting repeated requests to public APIs and endpoints is very simple. No more abusive requests.</p>
        </div>
        <div className={clsx('col col--6')} >
            <CodeBlock language="rust">
                {`#[tokio::main]
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
}`}
            </CodeBlock>
        </div>
    </div >)
}

export default RateLimitContent;