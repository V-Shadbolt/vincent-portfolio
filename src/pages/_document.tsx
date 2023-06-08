import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
        <Head>
            <link
                href="https://rsms.me/inter/inter.css"
                rel="stylesheet"
            />
        </Head>
        <body className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#4F4F51] from-5% via-[#2C2B30] via-30% to-[#0B0C10] to-100% leading-relaxed text-[#D6D6D6] antialiased selection:bg-[#F2C4CE] selection:text-[#F58F7C]">
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
