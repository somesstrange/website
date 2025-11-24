import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Layout, Menu, theme, Typography, Flex,
    Calendar, Image, Table 
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;


const Unicon = () => {

  return (
    <>
    
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-H8Z1LGX5ZL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-H8Z1LGX5ZL');
</script>

    <Title>Unicon & GameExpo</Title>
    <Divider variant='solid'/>

    <Text style={{fontSize: 30}}>
      Юникон в Минске — это крупнейший гик-фестиваль Беларуси, объединяющий миры комиксов, 
      игр, аниме, косплея и фантастики. Он проходит ежегодно в сентябре под названием 
      Unicon & Game Expo Minsk и собирает тысячи фанатов поп-культуры.<br/>
<p/>

Вот что тебя ждёт на фестивале:<br/>
<p/>

<Paragraph>
      <ul style={{fontSize: 30}}>
        <li>
          <b>Косплей-шоу:</b> от стендового до сценического — участники перевоплощаются в персонажей 
          из игр, фильмов, аниме и комиксов.
        </li>
        <li>
          <b>Game Expo:</b> зона видеоигр и настолок, где можно поиграть, протестировать новинки и 
          пообщаться с разработчиками.
        </li>
        <li>
          <b>Аллея авторов и Инди Хаб:</b> художники, писатели, комиксисты и инди-разработчики 
          представляют свои проекты.
        </li>
        <li>
          <b>Конкурсы: </b>фанарт, крафт, комиксы, рассказы, видеоролики и даже фотокосплей — 
          каждый может проявить себя.
        </li>
        <li>
          <b>Лекции и встречи:</b> с авторами, блогерами, геймдизайнерами и другими представителями 
          индустрии.
        </li>
      </ul>
    </Paragraph>

В 2024 году фестиваль проходил с 13 по 15 сентября, и, судя по всему, в 2025-м он снова 
состоится в эти же даты. Билеты бывают разных категорий — от однодневных до VIP с ранним входом, 
лаунж-зоной и сувенирами<br/>
<p/>
    </Text>
    </>
  );
};
export default Unicon;