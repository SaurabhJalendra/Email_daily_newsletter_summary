import { Html, Head, Main, NextScript } from 'next/document';

// IBM Plex (Sans Condensed + Mono), same families and weights as design/reference-sheet/template.html.
const FONTS =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans+Condensed:ital,wght@0,500;0,600;1,400&family=IBM+Plex+Sans:wght@500;600&display=swap';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
