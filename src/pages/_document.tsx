import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* => Configuração SSR Stitches */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        {/* => Equivalente ao Root de uma aplicação React */}
        <Main />

        {/* => Define em qual lugar do html o Javascript sera renderizado */}
        <NextScript />
      </body>
    </Html>
  )
}

// => IMPORTANTE
// TODA VEZ QUE ESSE ARQUIVO FOR ALTERADO É NECESSÁRIO REINICIAR O SERVIDOR NODE.
