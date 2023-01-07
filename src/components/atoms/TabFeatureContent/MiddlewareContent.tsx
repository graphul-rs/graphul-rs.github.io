import React from 'react'
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';

const MiddlewareContent = () => {
    return (<div className={clsx('row')}>
        <div className={clsx('col col--6')}>
            <h1>Flexible Middleware Support</h1>
            <p>The flexible middleware system allows us to add additional behavior to request/response processing. Middleware can hook into an incoming request process, enabling us to modify requests as well as halt request processing to return a response early</p>
            <p>Typically, middleware is involved in the following actions:</p>
            <ul>
                <li>Pre-process the Request</li>
                <li>Post-process a Response</li>
                <li>Modify application state</li>
                <li>Access external services (redis, logging, sessions)</li>
            </ul>
            <p>Choose from a number of already existing middleware or create your own with simple steps, our middleware API allows plugins to provide lots of plug-and-play features for your site.</p>
            <p>Easy integration with a lot of popular crates like <Link to={"https://github.com/tokio-rs/tracing"}>Tracing</Link>, <Link to={"https://diesel.rs"}>Diesel</Link>, <Link to={"https://www.sea-ql.org/SeaORM/"}>SeaORM</Link>, <Link to={"https://github.com/juhaku/utoipa"}>utopia</Link> and more.</p>
        </div>
        <div className={clsx('col col--6')} >
            <CodeBlock language="rust">
                {`use graphul::{Req, middleware::{self, Next}, http::{response::Response,Methods}, Graphul};
  
async fn my_middleware( request: Req, next: Next ) -> Response {
  let authenticated = false;
  if !authenticated {
    return Redirect::to("/login");
  }
  next.run(request).await
}

#[tokio::main]
async fn main() {
  let mut app = Graphul::new();

  app.get("/", || async {
      "hello world!"
  });
  app.middleware(middleware::from_fn(my_middleware));

  // routes out of the scope of the middleware
  app.get("/login", || async {
      "Login page"
  });

  app.run("127.0.0.1:8000").await;
}`}
            </CodeBlock>
        </div>
    </div >)
}

export default MiddlewareContent;