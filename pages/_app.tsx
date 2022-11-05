import '../styles/base.scss';
import 'highlight.js/styles/monokai.css';

import { AppProps } from 'next/app';
import TheFooter from '../components/common/TheFooter';
import TheHeader from '../components/common/TheHeader';

import hljs from 'highlight.js/lib/core';
import rust from '../lib/rusthighlight';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  hljs.registerLanguage('rust', rust);

  return (
    <main>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta name="title" content="Graphul" />
        <meta
          name="description"
          content="An Express-inspired web framework written in Rust."
        />

        <meta property="og:title" content="Graphul" />
        <meta
          property="og:description"
          content="An Express-inspired web framework written in Rust."
        />
        <meta
          property="og:image"
          content="https://github.com/graphul-rs/graphul/raw/main/img/logo.png"
        />
        <meta property="og:site_name" content="Graphul" />
        <meta
          property="og:url"
          content="https://github.com/graphul-rs/graphul"
        />
        <meta content="website" property="og:type" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://github.com/graphul-rs/graphul/raw/main/img/logo.png"
        />

        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
      </Head>

      <TheHeader />

      <section className="wrapper">
        <Component {...pageProps} />
      </section>

      <TheFooter />
    </main>
  );
}
