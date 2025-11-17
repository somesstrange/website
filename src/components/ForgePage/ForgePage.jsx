import React, { useState, useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Info from './choices/Info';
import Prices from './choices/Prices';
import Examples from './choices/Examples';
const { Header, Content, Footer, Sider } = Layout;


const items = [
  {
    key: `1`,
    label: `Информация`,        
  },
  {
    key: `2`,
    label: `Расценки`,        
  },
  {
    key: `3`,
    label: `Примеры работ`,        
  },
];

const ForgePage = ({ initialTab = '1' }) => {

  const [selectedPage, setSelectedPage] = useState(initialTab);

  
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
    
      const handleMenuClick = (e) => {
        setSelectedPage(e.key);
      };
  
      const renderPage = () => {
      switch (selectedPage) {
        case '1':
          return <Info />;
        case '2':
          return <Prices />;
        case '3':
          return <Examples />;
        default:
          return <ForgePage />; 
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
        width={270}
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
export default ForgePage;