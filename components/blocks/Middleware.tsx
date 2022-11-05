import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `use graphul::{Req, middleware::{self, Next}, http::{response::Response,Methods}, Graphul};


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
}`;

class MiddlewareBlock extends Component {
  render() {
    return (
      <section className="generic-block reverse">
        <div className="mid">
          <div className="right">
            <h3>Flexible Middleware Support</h3>
            <p>
              Choose from{' '}
              <a
                href="https://docs.rs/tower-http/0.1.2/tower_http/index.html"
                target="_blank"
              >
                a number of already existing middleware
              </a>{' '}
              or create your own! Use them to verify and manipulate certain
              requests in your app before they reach your controller.
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

export default MiddlewareBlock;
