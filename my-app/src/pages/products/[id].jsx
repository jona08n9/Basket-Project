import Image from "next/image";
import Head from "next/head";
import Anchor from "../components/Anchor";

export default function Product({ data }) {
  console.table(data);
  return (
    <>
      <Head>
        <title>{data.productdisplayname}</title>
      </Head>
      <Anchor href="/"> Go back</Anchor>
      <h1>{data.productdisplayname}</h1>
      <p>
        Price: <span>{data.price}</span>
      </p>
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context.params.id);
  const slug = context.params.id;
  const api = "https://kea-alt-del.dk/t7/api/products/" + slug;
  //   const data = await fetch(api).then((res) => res.json());
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const api = "https://kea-alt-del.dk/t7/api/products/";
  const res = await fetch(api);
  const data = await res.json();

  const paths = data.map((object) => {
    return { params: { id: String(object.id) } };
  });
  return {
    paths,
    fallback: true,
  };
}
