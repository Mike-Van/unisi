import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import getConfig from 'next/config';

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    // const { publicRuntimeConfig } = getConfig();
    // const { version, env } = publicRuntimeConfig || {};
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta name="description" content="MVP projects" />
          <meta name="author" content="Unisi - MVP projects" />
          <meta name="copyright" content="Unisi - MVP projects. All Rights Reserved." />
          <meta name="application-name" content="Unisi - MVP projects" />
          <link rel="stylesheet" href="./static/style.css" />
          <meta name="theme-color" content="#333" />
          {false && <link rel="manifest" href="./static/manifest.json" />}
          <link rel="shortcut icon" type="image/x-icon" href="./static/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="./static/favicon.ico" />
          <link font-src="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:400,700|PT+Serif:400" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:400,700|PT+Serif:400" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
