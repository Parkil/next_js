/*
    next js 최상위 component
 */
import Layout from "./Layout";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    );
}