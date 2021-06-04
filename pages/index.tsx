import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {  useState } from "react";
import { CardProduct } from "../componets/CardProduct";
import { ListComponent } from "../componets/ListComponent";
import { getDataML } from "../util/api-ml";

export default function Home(props) {
  return (
    <div style={{textAlign:'center'}}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Image src="/vercel.svg" height={200} width={200} />
      <h1>Ecommerce de ejemplo</h1>
      <h3>Productos destacados</h3>

      <ListComponent productos={props.productos} />
      <Link href="/list">
        <a>Ver productos</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "soy la home del static generation",
      productos: await getDataML('q=zapatillas'),
    },
  };
}
