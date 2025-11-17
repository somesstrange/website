import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import News from './choices/news';
import Schedule from './choices/Schedule';
import FirstDay from './choices/FirstDay';
import Address from './choices/Address';
import History from './choices/History';
import './MainPage.css'

const items = [
  {
    key: `1`,
    label: `Новости`,        
  },
  {
    key: `2`,
    label: `Тренировки`,
    children: [
      {
        key: 'sub1',
        label: `Расписание`,
      },
      {
        key: 'sub2',
        label: `Первый день`,
      },
      {
        key: 'sub3',
        label: `Адрес`,
      },
    ]
        
  },
  {
    key: `3`,
    label: `Летопись`,       
  },
];

const MainPage = () => {

  const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

  const [selectedPage, setSelectedPage] = useState('1');
  
    const handleMenuClick = (e) => {
      setSelectedPage(e.key);
    };

    const renderPage = () => {
    switch (selectedPage) {
      case '1':
        return <News />;
      case 'sub1':
        return <Schedule />;
      case 'sub2':
        return <FirstDay />;
      case 'sub3':
        return <Address />;
      case '3':
        return <History />;
      default:
        return <MainPage />; 
    }
  };

  return (
    <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-H8Z1LGX5ZL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-H8Z1LGX5ZL');
</script>
    <Layout style={{ backgroundColor: '#e3d7b8'}}>
       <Layout
  className="background-style"
  style={{
    height: '760px',
    borderRadius: borderRadiusLG,
    overflow: 'hidden',
  }}
>
          <Sider
  className="background-sider"
  style={{
    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
  }}
  width={250}
>
  <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', fontSize: 30, background: 'transparent' }}
    items={items}
    onClick={handleMenuClick}
  />
</Sider>

          <Content style={{
    padding: '0 24px',
    overflowY: 'auto',
    overflowX: 'hidden',
    
  }}>
            <div >
    {renderPage()}
  </div>
          </Content>
        </Layout>
    </Layout>
    </>
  );
};
export default MainPage;