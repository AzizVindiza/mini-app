import {Section, Cell, List, Card} from '@telegram-apps/telegram-ui';
import {FC, Fragment} from 'react';

import { Link } from '@/components/Link/Link.tsx';
import {CardChip} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import {CardCell} from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";

export const IndexPage: FC = () => {
  return (
    <List>
      <Section
        header='Товары'
        footer='Это раздел Web shopper'
      >
        <Link to='/about'>
          <Cell
            subtitle=''
          >
              <Card type="plain">
                  <Fragment key=".0">
                      <CardChip readOnly>
                          Купить
                      </CardChip>
                      <img
                          alt="book"
                          src="https://www.company.rt.ru/social/cyberknowledge/book_cybersecurity/SMakarov_book_TitlePage_250.png"
                          style={{
                              display: 'block',
                              height: 308,
                              objectFit: 'cover',
                              width: 254
                          }}
                      />
                      <CardCell
                          readOnly
                          subtitle="Кибербезопасность"
                      >
                          Книга
                      </CardCell>
                  </Fragment>
              </Card>

          </Cell>
        </Link>
      </Section>
      <Section
        header='Application Launch Data'
        footer='These pages help developer to learn more about current launch information'
      >
        <Link to='/init-data'>
          <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
        </Link>
        <Link to='/launch-params'>
          <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
        </Link>
        <Link to='/theme-params'>
          <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
        </Link>
      </Section>
    </List>
  );
};
