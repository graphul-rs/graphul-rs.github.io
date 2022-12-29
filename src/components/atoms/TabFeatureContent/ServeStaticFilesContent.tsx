import React from 'react'
import clsx from "clsx";
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';

const ServeStaticFilesContent = () => {
    return (<div className={clsx('row')}>
        <div className={clsx('col col--6')}>
            <h1>Serve Static Files</h1>
            <p>Serve your SPA (React, Vue, Svelte, Angular etc), static HTML, CSS, JavaScript and other kind of files with ease by defining static routes. You can also serve the contents of multiple directories on the same route!</p>
        </div>
        <div className={clsx('col col--6')} >
            <CodeBlock language="rust">
                {`app.static_files("/", "public", FolderConfig::default())
  
  // => http://localhost:3000/hello.html
  // => http://localhost:3000/js/jquery.js
  // => http://localhost:3000/css/style.css
  
  // single page application
  app.static_files("/", "app/build", FolderConfig::spa())`}
            </CodeBlock>
        </div>
    </div >)
}

export default ServeStaticFilesContent;