import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Bards from './choices/Bards';
import Warriors from './choices/Warriors';
import Trackers from './choices/Trackers';
import Monks from './choices/Monks';
import NoGuild from './choices/NoGuild';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: `1`,
    label: `Гильдия Бардов`,        
  },
  {
    key: `2`,
    label: `Гильдия Воинов`,        
  },
  {
    key: `3`,
    label: `Гильдия Следопытов`,        
  },
  {
    key: `4`,
    label: `Гильдия Монахов`,        
  },
  {
    key: `5`,
    label: `Гильдия ???`,
  },
  {
    key: `6`,
    label: `Гильдия ???`,       
  },
];

const GuildesPage = () => {

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
        return <Bards/>;
      case '2':
        return <Warriors />;
      case '3':
        return <Trackers />;
      case '4':
        return <Monks />;
      case '5':
        return <NoGuild />;
      case '6':
        return <NoGuild />;
      default:
        return <GuildesPage />; 
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
      width={320}
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
export default GuildesPage;