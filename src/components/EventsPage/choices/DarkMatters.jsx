import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Layout, Menu, theme, Typography, Flex,
    Calendar, Image, Table 
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;


const DarkMatters = () => {

  return (
    <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-H8Z1LGX5ZL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-H8Z1LGX5ZL');
</script>

    <Title>Тёмные Материи 2025</Title>
    <Divider variant='solid'/>

    <Text style={{fontSize: 30}}>
      Фестиваль «Тёмные Материи» в Минске — это настоящий праздник для фанатов поп-культуры, 
      косплея, игр и фантастики. В 2025 году он прошёл 8–9 марта в Falcon Club Arena и стал 
      уже четвёртым по счёту, под названием «Тёмные Материи IV. Инди-Хаб»2.<br/>
<p/>

Вот что там происходило:<br/>
<p/>

<Paragraph>
      <ul style={{fontSize: 30}}>
        <li>
          <b>Косплей-шоу:</b> герои из Fallout, Baldur’s Gate, Genshin Impact, 
          Cyberpunk 2077, Zelda и других вселенных ожили на сцене и в зале.
        </li>
        <li>
          <b>Инди-Хаб: </b>18 независимых разработчиков представили свои 
          настольные и компьютерные игры.
        </li>
        <li>
          <b>Art-Lane:</b> выставка работ художников, комиксистов и арт-групп.
        </li>
        <li>
          <b>Квест по стендам: </b>интерактивная игра с призами, которая вовлекала 
          гостей в исследование всей выставки.
        </li>
        <li>
          <b>Лекции и мастер-классы:</b> от космоса до психологии в видеоиграх — 
          например, обсуждали, могут ли игры заменить психотерапию.
        </li>
        <li>
          <b>Конкурсы и фан-стенды:</b> для тех, кто любит участвовать, а не только наблюдать.
        </li>
      </ul>
    </Paragraph>

Возрастное ограничение было 13+, а вход — платный. Атмосфера — как на стыке Comic Con 
и гик-фестиваля, только с белорусским колоритом.

    </Text>
    </>
  );
};
export default DarkMatters;