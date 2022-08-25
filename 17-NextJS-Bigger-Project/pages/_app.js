import "../styles/globals.css";
import Layout from "../components/layout/Layout";

// This Component, component is what renders the different pages, by wrapping it with our layout it will apply it to every page

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
