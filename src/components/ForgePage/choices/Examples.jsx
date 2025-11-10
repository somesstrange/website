import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Layout, Menu, theme, Typography, Flex,
    Calendar, Image 
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;
import dayjs from 'dayjs';



        
const Examples = () => {

  return (
    <>
    <Title>Примеры работ</Title>
    <Divider variant='solid'/>


    <Flex gap={20}>
        <Image width={400} src="/swords/1.jpg" /> 
        <Image width={400} src="/swords/2.jpg" />  
        <Image width={400} src="/swords/3.jpg" />
        <Image width={400} src="/swords/4.jpg" /> 
    </Flex>
    <p/>
    <Flex gap={20}>
        <Image width={400} src="/swords/5.jpg" /> 
        <Image width={400} src="/swords/6.jpg" />  
        <Image width={400} src="/swords/7.jpg" />
        <Image width={400} src="/swords/8.jpg" /> 
    </Flex>
    
    </>
  );
};
export default Examples;