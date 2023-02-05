import React from 'react'
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';

const TemplateEnginesContent = () => {
    return (<div className={clsx('row')}>
        <div className={clsx('col col--6')}>
            <h1>Template Engines</h1>
            <p>Graphul supports multiple template engines, one the most popular <Link to={"https://djc.github.io/askama/"}>Askama</Link> but you can use others after all, the style of templating you like to use varies from person to person.</p>
            <p>A template engine is essentially: <code>Data + Template = String!</code>.</p>
            <p>So, any template engine can be supported as long as it can render the final string.</p>
            <p>Typically, middleware is involved in the following actions:</p>
        </div>
        <div className={clsx('col col--6')} >
            <CodeBlock language="rust">
                {`use graphul::{ http::Methods, Context, Graphul, template::HtmlTemplate};
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
}`}
            </CodeBlock>
        </div>
    </div >)
}

export default TemplateEnginesContent;