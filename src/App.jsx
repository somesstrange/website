import React from 'react';
import { useState, useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Typography, Image, Flex,
  Button, ConfigProvider
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;
import logo from './assets/logo.jpg';
import './App.css';

import GuildesPage from './components/GuildesPage/GuildesPage';
import EventsPage from './components/EventsPage/EventsPage';
import MastersPage from './components/ForgePage/ForgePage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import MainPage from './components/MainPage/MainPage';
import ForgePage from './components/ForgePage/ForgePage';





const items1=[
            {
              key: '1',
              label: 'Главная',
            },
            {
              key: '2',
              label: 'Список гильдий',
            },
            {
              key: '3',
              label: 'Ивенты',
            },
            {
              key: '4',
              label: 'Кузня',
            },
];
const App = () => {
  

  const [selectedPage, setSelectedPage] = useState('1');

  const handleMenuClick = (e) => {
    setSelectedPage(e.key);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case '1':
        return <MainPage />;
      case '2':
        return <GuildesPage />;
      case '3':
        return <EventsPage />;
      case '4':
  return <ForgePage />;
      case '5':
        return <GalleryPage />;
      default:
        return <MainPage />; 
    }
  };

  return (
    
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Stonehenge",
          fontSize: 20,
          horizontalItemHoverColor: '#331f10',
        }
      }}
    >
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H8Z1LGX5ZL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-H8Z1LGX5ZL');
</script>
      <Layout style={{height: 940, width: 1843}}>
        <Layout style={{height: 870, width: 1843}}>
      <Header
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 40,
    height: 90,
    backgroundColor: '#331f10', // тёмно-синий, можно заменить на свой
  }}
>
  <Image
    src={logo}
    height={80}
    preview={false}
    style={{ borderRadius: '50%', width: 80, objectFit: 'cover' }}
  />

  <Title style={{ color: 'white', margin: 0 }}>Хроники Миров</Title>

  <Menu
    mode="horizontal"
    defaultSelectedKeys={['1']}
    items={items1}
    style={{
      flex: 1,
      minWidth: 0,
      fontSize: 30,
      backgroundColor: '#331f10',
      color: 'white',
    }}
    onClick={handleMenuClick}
  />

  {/*<Button style={{ background: '#c49a6c', border: 'none', color: '#fff' }}>
    Войти
  </Button>*/}
</Header>

      <Content style={{ padding: '10px', backgroundColor: '#70522a' }}> 
        {renderPage()} 
      </Content>
      
    </Layout>
    <Footer style={{ justifyItems: 'center', textAlign: 'center', backgroundColor: '#331f10', height: '64px', color: 'white' }}>
        Автор: Петропавловская Татьяна
      </Footer>
      </Layout>
      
    </ConfigProvider>
    
  );
};
export default App;