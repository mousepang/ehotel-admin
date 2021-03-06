import React, { useContext } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { MyContext } from '../../pages/admin/Admin';
import '../left-nav/left-nav.less';

const { Header } = Layout;

const Head = () => {
  let { collapsed, setCollapsed } = useContext(MyContext);
  return (
    <Header className="header" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => {
          console.log(1);
          setCollapsed(!collapsed);
        },
      })}
    </Header>
  );
};

export default Head;
