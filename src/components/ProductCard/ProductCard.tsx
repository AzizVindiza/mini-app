import {FC} from "react";
import './ProductCard.css'


export type ProductCardProps = {
    title: string;
    image: string;
    price: number;
}
export const ProductCard: FC<ProductCardProps> = ({title,image,price}) => {
    return (
        <div className="ProductCard">
            <img className="ProductCard__img"
                 src={image} alt={title}/>
            <p className="ProductCard__text">{title} {price}$</p>
            <button className="ProductCard__btn">buy</button>
        </div>
    );
};

export default ProductCard;