import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Logo from '@site/static/img/TestLogo.svg';
import FinalSeparator from '@site/static/img/final-separator.svg';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>
      <div className={'container'}>
        <Logo style={{maxWidth: "100%"}} />
        <h1 className={clsx('hero__title', styles.hero__title)}>Graphul</h1>
        <p className={clsx('hero__subtitle', styles.hero__subtitle)}>Build web services and save money<br/>{siteConfig.tagline}</p>
        <div className={clsx('row', styles.install)}>
          <CodeBlock className='col col--3' >cargo add graphul</CodeBlock>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/what-is-graphul">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg">
            FAQ
          </Link>
        </div>
      </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Graphul Documentation"
      wrapperClassName={styles.footer}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <FinalSeparator className={styles.finalSeparator}/>
    </Layout>
  );
}
