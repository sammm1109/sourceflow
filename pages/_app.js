// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
