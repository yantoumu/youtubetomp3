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
      <script type="text/javascript" data-cfasync="false"
        dangerouslySetInnerHTML={{
          __html: `/*<![CDATA[/* */
(function(){var c=window,i="a7761b758cb0a4678ea9d2e9c82d8b27",z=[["siteId",940+942-866+5168348],["minBid",0],["popundersPerIP","30:1,10:1"],["delayBetween",60],["default","https://poawooptugroo.com/4/8844364"],["defaultPerDay",5000],["topmostLayer","auto"]],n=["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL2xvV3RlL2x4bWwyanNvbi5taW4uanM=","ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvcC9RVWQva2Zyb2FsYV9lZGl0b3IubWluLmNzcw=="],a=-1,f,p,h=function(){clearTimeout(p);a++;if(n[a]&&!(1763654532000<(new Date).getTime()&&1<a)){f=c.document.createElement("script");f.type="text/javascript";f.async=!0;var o=c.document.getElementsByTagName("script")[0];f.src="https://"+atob(n[a]);f.crossOrigin="anonymous";f.onerror=h;f.onload=function(){clearTimeout(p);c[i.slice(0,16)+i.slice(0,16)]||h()};p=setTimeout(h,5E3);o.parentNode.insertBefore(f,o)}};if(!c[i]){try{Object.freeze(c[i]=z)}catch(e){}h()}})();
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
