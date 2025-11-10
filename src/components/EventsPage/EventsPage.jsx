import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DarkMatters from './choices/DarkMatters';
import Unicon from './choices/Unicon';
import Sonca from './choices/Sonca';
import Citadel from './choices/Citadel';
import DnD from './choices/DnD';
import Birthdays from './choices/Birthdays';
import Tournaments from './choices/Tournaments';
const { Header, Content, Footer, Sider } = Layout;


const items = [
  {
    key: `1`,
    label: `Фестивали`,        
    children: [
      {
        key: 'sub1',
        label: `Темные Материи`,
      },
      {
        key: 'sub2',
        label: `Юникон`,
      },
      {
        key: 'sub3',
        label: `Свята Сонца`,
      },
    ]
  },
  {
    key: `2`,
    label: `Ролевые`,
    children: [
      {
        key: 'sub4',
        label: `Безымянная Цитадель`,
      },
      {
        key: 'sub5',
        label: `ДнД`,
      },
    ]
  },
  {
    key: `3`,
    label: `Турниры`,
    children: [
      {
        key: 'sub6',
        label: `Весенний`,
      },
    ]
  },
];

const EventsPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedPage, setSelectedPage] = useState('sub1');
    
      const handleMenuClick = (e) => {
        setSelectedPage(e.key);
      };
  
      const renderPage = () => {
      switch (selectedPage) {
        case 'sub1':
          return <DarkMatters />;
        case 'sub2':
          return <Unicon />;
        case 'sub3':
          return <Sonca />;
        case 'sub4':
          return <Citadel />;
        case 'sub5':
          return <DnD />;
        case 'sub6':
          return <Tournaments />;
        default:
          return <EventsPage />; 
      }
    };
  
    return (
      <>
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
        width={350}
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
export default EventsPage;
