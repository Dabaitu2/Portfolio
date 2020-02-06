import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const IP = 'http://144.34.173.162/static/fonts';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Black.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Black Italic.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Bold.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Bold Italic.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Extra Light.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Extra Light Italic.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Italic.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Light.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Light Italic.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Medium.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Medium Italic.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Regular.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Semi Bold.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Semi Bold Italic.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Semi Ultra Light.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
          <link
            rel={'preload'}
            href={`${IP}/Sofia Pro Semi Ultra Light.otf`}
            as="font"
            type={'font/opentype'}
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
