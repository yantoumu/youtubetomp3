import type { AppProps } from 'next/app'
import { type ReactElement } from 'react'
import Script from 'next/script';
import Head from 'next/head';
import '../style.css';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  // useEffect(() => {
  //   document.documentElement.classList.add('dark')
  // }, []);

  return (<>
    <Head>
      <meta name="saashub-verification" content="zm6rcf35ll2n" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907197973761221"
        crossOrigin="anonymous"></script>
      <script type="text/javascript" data-cfasync="false"
        dangerouslySetInnerHTML={{
          __html: `/*<![CDATA[/* */
(function(){var j=window,a="a7761b758cb0a4678ea9d2e9c82d8b27",h=[["siteId",103-352*12*274+6326637],["minBid",0.001],["popundersPerIP","2:1,10:1"],["delayBetween",60],["default","https://poawooptugroo.com/4/8844364"],["defaultPerDay",5000],["topmostLayer","auto"]],s=["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL2RWVG1EL3N4bWwyanNvbi5taW4uanM=","ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvWC9zVk1LL3Jmcm9hbGFfZWRpdG9yLm1pbi5jc3M="],w=-1,n,t,c=function(){clearTimeout(t);w++;if(s[w]&&!(1763696599000<(new Date).getTime()&&1<w)){n=j.document.createElement("script");n.type="text/javascript";n.async=!0;var f=j.document.getElementsByTagName("script")[0];n.src="https://"+atob(s[w]);n.crossOrigin="anonymous";n.onerror=c;n.onload=function(){clearTimeout(t);j[a.slice(0,16)+a.slice(0,16)]||c()};t=setTimeout(c,5E3);f.parentNode.insertBefore(n,f)}};if(!j[a]){try{Object.freeze(j[a]=h)}catch(e){}c()}})();
/*]]>/* */`}} >
      </script>
    </Head >

    {/* monetag ads - multitag */}
    {/* <script src="https://alwingulla.com/88/tag.min.js" data-zone="126979" async data-cfasync="false"></script> */}

    {/* monetag ads - popunder 8833117 */}
    {/* <Script>
      {`
      (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://shebudriftaiter.net/tag.min.js',8833117,document.body||document.documentElement)
      `}
    </Script> */}


    {/* monetag ads - Vignette Banner 8833160 */}
    <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',8833160,document.createElement('script'))
      `}
    </Script>


    {/* monetag ads - In-Page Push 8833149 */}
    {/* <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',8833149,document.createElement('script'))
      `}
    </Script> */}

    {/* monetag ads - Native Banner (Interstitial) 8833215 */}
    <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8833215,document.createElement('script'))
      `}
    </Script>

    {/* Google tag (gtag.js)  */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-54K88LRQBS"
      strategy='afterInteractive'>
    </Script>
    <Script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-54K88LRQBS');
      `}
    </Script>

    <Component {...pageProps} />
  </>)
}
