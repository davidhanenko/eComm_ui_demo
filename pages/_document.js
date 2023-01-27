import Document, {
  Html,
  Head,
  NextScript,
  Main,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    function handleCollectStyles(App) {
      return props => {
        return sheet.collectStyles(<App {...props} />);
      };
    }

    const page = renderPage(App =>
      handleCollectStyles(App)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {this.props.styleTags}
          <meta
            name='robots'
            content='noindex, nofollow'
          ></meta>
          {/* <link
            rel='preload'
            href='/fonts/roboto-flex-v9-latin-regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
