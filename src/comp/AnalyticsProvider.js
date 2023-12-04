import React from 'react'
import Head from 'next/head';
function AnalyticsProvider({ children }) {
    return (
      <>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-MW9LN2RB39`}
          />
          <script>{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MW9LN2RB39');`}</script>
        </Head>
        {children}
      </>
    );
  }

export default AnalyticsProvider