import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Layout, Menu, theme, Typography, Flex,
    Calendar 
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;
import dayjs from 'dayjs';
import './Schedule.css';

        
const Schedule = () => {

    const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
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
    <Flex vertical='true' style={{width: 1500, height: 200, overflow: scroll}}>
        <Title>Рапсисание тренировок</Title>
    <Divider variant='solid'/>


    <Flex gap={200}>
    <Text style={{fontSize: 30}}>
        Ближайшая лучная тренировка: <p/>
        <Paragraph>
            <div style={wrapperStyle}>
            <Calendar fullscreen={false}
            value={dayjs('2025-06-19')}/>
            </div>
        </Paragraph>

    </Text>
    <Text style={{fontSize: 30}}>
        Ближайшая фехтовальная тренировка: <p/>
        <Paragraph>
            <div style={wrapperStyle}>
            <Calendar fullscreen={false}
            value={dayjs('2025-06-21')}/>
            </div>
        </Paragraph>

    </Text>
    </Flex>
    
    </Flex>
    
    </>
  );
};
export default Schedule;