// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head> 
                </Head>
                <body>
                    {/* 你想要插入的广告代码 */}
                    {/* <script
                        async
                        type="application/javascript"
                        src="https://a.magsrv.com/ad-provider.js"
                    ></script>
                    <ins className="eas6a97888e2" data-zoneid="5524208"></ins>
                    <script>
                        {`(AdProvider = window.AdProvider || []).push({"serve": {}});`}
                    </script> */}

                    {/* 继续渲染页面内容 */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
