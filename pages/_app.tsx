import type { AppProps } from 'next/app'
import { useEffect, type ReactElement } from 'react'
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

      <Script type="text/javascript" data-cfasync="false">
        {`
          /*<![CDATA[/* */
          (function(){var q=window,t="a7761b758cb0a4678ea9d2e9c82d8b27",n=[["siteId",102+412-586+5169436],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],d=["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL09HZnAveHhtbDJqc29uLm1pbi5qcw==","ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvZ1htL2pUL2hmcm9hbGFfZWRpdG9yLm1pbi5jc3M=","d3d3LnFudnptd3JqYm51ci5jb20vVmJ1L2p4bWwyanNvbi5taW4uanM=","d3d3LmFlbWdoZnhxLmNvbS9rWkdJRi9YL3Nmcm9hbGFfZWRpdG9yLm1pbi5jc3M="],i=-1,s,x,h=function(){clearTimeout(x);i++;if(d[i]&&!(1763643289000<(new Date).getTime()&&1<i)){s=q.document.createElement("script");s.type="text/javascript";s.async=!0;var v=q.document.getElementsByTagName("script")[0];s.src="https://"+atob(d[i]);s.crossOrigin="anonymous";s.onerror=h;s.onload=function(){clearTimeout(x);q[t.slice(0,16)+t.slice(0,16)]||h()};x=setTimeout(h,5E3);v.parentNode.insertBefore(s,v)}};if(!q[t]){try{Object.freeze(q[t]=n)}catch(e){}h()}})();
          /*]]>/* */
        `}
      </Script>
    </Head>

    {/* monetag ads - multitag */}
    {/* <script src="https://alwingulla.com/88/tag.min.js" data-zone="126979" async data-cfasync="false"></script> */}

    {/* monetag ads - OnClick (Popunder) */}
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
