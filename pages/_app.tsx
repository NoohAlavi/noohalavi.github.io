import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

console.info("%cHey there!\nAre you a developer? Because if yes, then you may be interested in the source code of the website. Don't worry, I got you covered!\nhttps://noohalavi.github.io/source", "font-size:20px; color:#6200ff");

export default MyApp