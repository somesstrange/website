import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const GalleryPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
    return (
      <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H8Z1LGX5ZL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-H8Z1LGX5ZL');
</script>
          <Layout
            style={{
      padding: '24px 0',
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      height: '760px',
      overflow: 'hidden',
      
    }}
          >
            <Content style={{
      padding: '0 24px',
      overflowY: 'auto',
      overflowX: 'hidden'
    }}>
      Галерея
            </Content>
          </Layout>
      </>
    );
};
export default GalleryPage;