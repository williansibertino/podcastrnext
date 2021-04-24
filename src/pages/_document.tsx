// Configuração do html
import Document, {Html, Head, Main, NextScript} from 'next/document';

// Precisa criar classe para usar, ainda não tem como criar ele como função
export default class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}