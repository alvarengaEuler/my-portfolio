import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      /> */}

      {/* <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script> */}
      <NextSeo
        title="Euler Alvarenga | Frontend Developer"
        titleTemplate="Euler Alvarenga | Frontend Developer"
        defaultTitle="Euler Alvarenga | Frontend Developer"
        description="Hey! I'm Euler Alvarenga, A Frontend Developer!"
        openGraph={{
          url: "#",
          title: "Euler Alvarenga | Frontend Developer",
          description: "Hey! I'm Euler Alvarenga, A Frontend Developer!",
          images: [
            {
              url: "https://lh3.googleusercontent.com/drive-viewer/AJc5JmRfimY6R2x0YCS7nfP8w8bGCy9fYCq5ODzEnFmav4xqtUK_FNirhs-LAbyU3bOQgZuHpUMDPNE=w1637-h936",
              width: 800,
              height: 474,
              alt: "Euler Alvarenga | Frontend Developer",
            },
          ],
        }}
        // twitter={{
        //   handle: "@kr_anurag_",
        //   site: "@kr_anurag_",
        //   cardType: "summary_large_image",
        // }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, euler, alvarenga, Web Developer, ios, android, react, react native, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
