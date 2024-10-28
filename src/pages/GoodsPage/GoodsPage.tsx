import {Section, List} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import book from './book.jpg'

export const GoodsPage: FC = () => {
    return (
        <List>
            <Section
                header='Товары от нас'
                footer='Товары которые вы можете приобрести за получнеый опыт'
            >
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    тест тест
                </div>
                <img width={50} src={book} alt="book"/> <span>книга</span>
                <div style={{width:"100px", background: "red", height: "20px"}}></div>
            </Section>
        </List>
    );
};
