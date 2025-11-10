import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Layout, Menu, theme, Typography, Flex,
    Calendar, Image 
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;
import dayjs from 'dayjs';
import address from 'D:/diploma/src/assets/address.jpg';


        
const Address = () => {

  return (
    <>
    <Flex vertical='true' style={{width: 1500, height: 200, overflow: scroll}}>
        <Title>Адрес клуба</Title>
    <Divider variant='solid'/>
    
    <Flex vertical gap={13} justify='center'>
        <Text style={{fontSize: 30}}>
        Все тренировки на данный момент походят по адресу: Славинского 45<br/>
        Зал находится в 10-15 минутах ходьбы от станции метро "Восток" 
    </Text>
<Image src={address} style={{ height: 500, width:800}}
    preview={{
    mask: false
  }}/>
    </Flex>
    
    
    </Flex>
    
    </>
  );
};
export default Address;