import {FC} from 'react';
import ProductCard from "@/components/ProductCard/ProductCard.tsx";
import {List} from "@telegram-apps/telegram-ui";
import burger from './burger-bar.png'

export const IndexPage: FC = () => {
    return (
        <List>
            <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
                <ProductCard title={"burger"} image={burger} price={9.39}/>
                <ProductCard title={"burger"} image={burger} price={9.39}/>
                <ProductCard title={"burger"} image={burger} price={9.39}/>
                <ProductCard title={"burger"} image={burger} price={9.39}/>
                <ProductCard title={"burger"} image={burger} price={9.39}/>
            </div>
        </List>
    );
};
