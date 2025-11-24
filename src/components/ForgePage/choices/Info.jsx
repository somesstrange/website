import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Divider, Layout, Menu, theme, Typography, Flex,
    Calendar, Image 
 } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;
import dayjs from 'dayjs';


        
const Info = () => {

  return (
    <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-H8Z1LGX5ZL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-H8Z1LGX5ZL');
</script>
    <Title>Кузня мастера Бальтазара</Title>
    <Divider variant='solid'/>

    <Text style={{fontSize: 30}}>
        Приветствую заблудшую душу. <br/>
Меня зовут Бальтазар, я являюсь крафтером, кузнецом и 
хранителем пламени в клубе "Хроники Миров". <br/>
<p/>
Сквозь огонь и сталь, сквозь резину, клей и утренние обмозги я создаю то, 
что в руках становится продолжением воли — оружие, которое вдохновляет бойца и пробуждает образ.<br/>
<p/>
Специализируюсь на изготовлении LARP-оружия по двум основным технологиям, 
которые разрабатывались мною и моими учениками годами. Мы не просто клеим клинки — мы вдыхаем 
в них дух истории. Наше ремесло строится на балансе: между лёгкостью и прочностью, эстетикой и 
безопасностью, между игрой и настоящей страстью к созданию.<br/>
<p/>
Что делает нас уникальными? Мы не копируем — мы творим. Каждое изделие — это не просто реквизит. 
Это персонаж. Его история, его предназначение, его бой.<br/>
<p/>
В нашей гильдии ты не просто учишься делать меч — ты учишься слышать металл. Видеть материал ещё 
до того, как он стал формой. Чувствовать, где хват лишён баланса, где лезвие требует изгиба. 
Мы учим основам: от чертежа до финишного покрытия. Мы говорим языком гравировки, волокон и геометрии. 
И если ты хочешь стать мастером, а не просто пользователем чьей-то работы — тебе сюда.<br/>
<p/>
    </Text>
    
    </>
  );
};
export default Info;