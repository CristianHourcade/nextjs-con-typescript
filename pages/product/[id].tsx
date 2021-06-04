import { ProductModel } from "../../models/product";
import { getDataML } from "../../util/api-ml";
const DetailProduct = (props) => {
  console.log(props);
  return <div>{props.producto.name}</div>;
};

export default DetailProduct;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "Zapatillas" } },
      { params: { id: "Botas" } },
      { params: { id: "Consolas" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await getDataML(`q=${params.id}`);
  return {
    props: {
      title: params.id,
      producto: response[0],
    },
  };
}
