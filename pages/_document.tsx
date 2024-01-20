import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {

  render() {

    return (
      <Html 
      className="html" 
      lang="ru"
      >
        <title>Транснефть</title>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="canonical" href="https://www.transneft.ru/" />
          <meta 
            name="description" 
            content="Оказание услуг по транспортировке нефти и нефтепродуктов по магистральным трубопроводам Российской Федерации, а также за пределы России" />
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
