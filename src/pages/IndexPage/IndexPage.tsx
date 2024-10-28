import {FC} from 'react';
import ProductCard from "@/components/ProductCard/ProductCard.tsx";
import {List} from "@telegram-apps/telegram-ui";

export const IndexPage: FC = () => {
    return (
        <List>
            <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
                <ProductCard title={"burger"}
                             image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"}
                             price={9.39}/>
                <ProductCard title={"burger"}
                             image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"}
                             price={9.39}/>
                <ProductCard title={"burger"}
                             image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"}
                             price={9.39}/>
                <ProductCard title={"burger"}
                             image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"}
                             price={9.39}/>
                <ProductCard title={"burger"}
                             image={"https://png.pngtree.com/png-clipart/20220413/ourmid/pngtree-burger-icon-png-image_4541658.png"}
                             price={9.39}/>
            </div>
        </List>
    );
};
