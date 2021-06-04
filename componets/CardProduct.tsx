import { CardProps } from "../models/props";
import style from "./product.module.css";
export const CardProduct = (props: CardProps) => {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{props.product.name}</h2>
      <b>${props.product.price}</b>
    </div>
  );
};
