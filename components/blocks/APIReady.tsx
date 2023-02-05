import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `app.get("/api/posts", |c: Context| async move {
    let posts = getPosts(); // your logic
    if posts.len() == 0 {
        return (StatusCode::NOT_FOUND, c.json(json!{
          "success": false,
          "error":   "There are no posts!"
        })).into_response();
    }
    c.json(json!{
        "success": true,
        "posts":   posts,
    }).into_response()
})`;

class APIReady extends Component {
  render() {
    return (
      <section className="generic-block faint">
        <div className="mid">
          <div className="left">
            <h3>API-ready</h3>
            <p>
              Are you building an API server? We've got you covered! Graphul is
              the perfect choice for building REST APIs in Rust. Receiving and
              sending data is fast and easy!
            </p>
          </div>
          <div className="right">
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>
        </div>
      </section>
    );
  }
}

export default APIReady;
