import React from 'react'
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

const RoutingContent = () => {
    return (<div className={clsx('row', styles.rowAlign)}>
        <div className={clsx('col col--6')}>
            <h1>Robust Routing</h1>
            <p>Setting up routes for your application has never been so easy! The Express-like route definitions are easy to understand and work with.</p>
            <p>As an example, consider these simple routes:</p>
            <p>You set a endpoint with <code>Graphul</code> instance, acceding a function with the name of a HTTP method. <br />
                In this case we set a endpoint with <code>app.get</code>, we pass the path and a function to execute as parameters.</p>
            <p>Besides we can get a param by route (line 5) and we access to the param by the <code>Context</code></p>
        </div>
        <div className={clsx('col col--6')} >
            <CodeBlock language="rust" showLineNumbers>
                {`app.get("/", || async {
      "GET request"
  })
  
  app.get("/:param", |c: Context| async move {
      format!("param: {}", c.params("param"))
  })
  
  app.post("/", || async {
      "POST request"
  })`}
            </CodeBlock>
        </div>
    </div >)
}


export default RoutingContent;