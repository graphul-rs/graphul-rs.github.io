import styles from './MainBlock.module.scss';
import { Component } from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CodeBlock from '../windows/CodeBlock';
import BrowserWindow from '../windows/BrowserWindow';

const exampleCode = `use graphul::{Graphul, http::Methods};

#[tokio::main]
async fn main() {
    let mut app = Graphul::new();

    app.get("/", || async {
        "Hello, World 👋!"
    });

    app.run("127.0.0.1:8000").await;
}`;

class MainBlock extends Component {
  render() {
    return (
      <div>
        <section className={`mid ${styles.mainBlock}`}>
          <h2 className={styles.largeText}>
            (re-)Write your microservices and save money 💵
          </h2>
          <div className={styles.description}>
            Graphul is built with Rust. that means Graphul gets memory safety,
            reliability, concurrency, and performance for free. helping to save
            money and energy 🔌 on infrastructure.
          </div>
        </section>

        <section className={`mid ${styles.mainExample}`}>
          <div className={styles.codeExampleWrapper}>
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>

          <div className={styles.arrowContainer}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className={styles.result}>
            <BrowserWindow url="http://localhost:8000">
              <pre>Hello, World 👋!</pre>
            </BrowserWindow>
          </div>
        </section>

        <section className="emphasized-button">
          <div className="mid">
            <a href="https://crates.io/crates/graphul">
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <div className={styles.orScroll}>...or scroll to learn more.</div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainBlock;
