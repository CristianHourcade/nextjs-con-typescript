import { ProductModel } from "../models/product";

export const getDataML = async (term: string): Promise<ProductModel[]> => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?${term}`
  );
  const data = await response.json();
  console.log( `https://api.mercadolibre.com/sites/MLA/search?${term}`);
  const products : ProductModel[] = data.results.map((element,index) => {
      return {
          id:index,
          name:element.title,
          price:element.price
      }
  });
  return products;
};
