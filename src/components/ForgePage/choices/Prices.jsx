import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Layout, Menu, theme, Typography, Flex,
    Calendar, Image, Table 
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;
import dayjs from 'dayjs';
import '../ForgePage.css'


const columns = [
  {
    title: 'Тип оружия',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Основные размеры',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
  },
];


const data = [
  {
    key: '1',
    type: 'Полуторный меч',
    size: '140-150 см',
    price: '350 рублей',
  },
  {
    key: '2',
    type: 'Одноручный меч',
    size: '110-120 см',
    price: '200 рублей',
  },
  {
    key: '3',
    type: 'Цвайхадер',
    size: '170-180 см',
    price: '450 рублей',
  },
  {
    key: '4',
    type: 'Двухлезвийная глефа',
    size: '170-180 см',
    price: '250 рублей',
  },
  {
    key: '3',
    type: 'Катана',
    size: '120-130 см',
    price: '250 рублей',
  },
];


        
const Prices = () => {

  return (
    <>
    <Title>Расценки</Title>
    <Divider variant='solid'/>
    
    <Table className="custom-weapons-table"
    columns={columns} 
    dataSource={data} 
    pagination={false}
    />
    <br/>
    <br/>
    <Text style={{fontSize: 30}}>
        С каждым заказчиком будет проводиться отдельная консультация, 
        подбираться эскиз будущего оружия и последующая сверка в процессе работы
    </Text>
    
    </>
  );
};
export default Prices;