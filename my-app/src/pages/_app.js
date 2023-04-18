import "@/styles/globals.css";
import Layout from "@/components/Layout";
import App from "next/app";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

{
  /* <Layout navData={navData} */
}
