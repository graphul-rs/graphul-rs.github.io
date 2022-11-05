import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `use graphul::{ http::Methods, Context, Graphul, template::HtmlTemplate};
use askama::Template;

#[derive(Template)]
#[template(path = "hello.html")]
struct HelloTemplate {
  name: String,
}

#[tokio::main]
async fn main() {
  let mut app = Graphul::new();

  app.get("/:name", |c: Context| async  move {
      let template = HelloTemplate { name: c.params("name") };
      HtmlTemplate(template)
  });

  app.run("127.0.0.1:8000").await;
}`;

class Templating extends Component {
  render() {
    return (
      <section className="generic-block">
        <div className="mid">
          <div className="left">
            <h3>Template Engines</h3>
            <p>
              Graphul supports multiple template engines.
            </p>
            <a href="https://github.com/graphul-rs/graphul/tree/main/examples/templates" target="_blank">
              Example
            </a>
          </div>
          <div className="right">
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>
        </div>
      </section>
    );
  }
}

export default Templating;
