import {FC} from 'react';
import ProductCard from "@/components/ProductCard/ProductCard.tsx";

export const IndexPage: FC = () => {
    return (
        <div style={{display:"flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        <ProductCard title={"burger"} image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"} price={9.39}/>
        <ProductCard title={"burger"} image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"} price={9.39}/>
        <ProductCard title={"burger"} image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"} price={9.39}/>
        <ProductCard title={"burger"} image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"} price={9.39}/>
        <ProductCard title={"burger"} image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"} price={9.39}/>
        </div>
    );
};
