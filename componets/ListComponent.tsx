import { CardProduct } from "./CardProduct";

export const ListComponent = ({ productos }) => {
  return (
    <>
      {productos.map((element, index) => {
        return (
          <span key={index}>
            <CardProduct
              product={{ id: index, name: element.name, price: element.price }}
            />
          </span>
        );
      })}
    </>
  );
};
