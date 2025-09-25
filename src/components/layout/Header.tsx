'use client';

import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Space } from 'antd';
import { MenuOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { key: '/', label: '首页' },
    { key: '/services', label: '服务项目' },
    { key: '/about', label: '关于我们' },
    { key: '/contact', label: '联系我们' },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <AntHeader className="bg-white shadow-sm px-4 lg:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">智</span>
          </div>
          <span className="text-xl font-bold text-gray-800">智慧财税</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            className="border-none bg-transparent"
            items={menuItems.map(item => ({
              key: item.key,
              label: (
                <Link 
                  href={item.key}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.label}
                </Link>
              ),
            }))}
          />
          
          <Space size="large">
            <Button
              type="primary"
              icon={<PhoneOutlined />}
              className="bg-blue-600 hover:bg-blue-700"
            >
              400-888-0001
            </Button>
            <Button
              icon={<MailOutlined />}
              href="mailto:contact@zhihuicaishui.com"
            >
              咨询服务
            </Button>
          </Space>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="lg:hidden"
        />

        {/* Mobile Drawer */}
        <Drawer
          title="导航菜单"
          placement="right"
          onClose={onClose}
          open={drawerVisible}
          width={280}
        >
          <Menu
            mode="vertical"
            selectedKeys={[pathname]}
            className="border-none"
            onClick={onClose}
            items={menuItems.map(item => ({
              key: item.key,
              label: (
                <Link href={item.key} className="text-gray-700 hover:text-blue-600">
                  {item.label}
                </Link>
              ),
            }))}
          />
          
          <div className="mt-8 space-y-4">
            <Button
              type="primary"
              icon={<PhoneOutlined />}
              block
              className="bg-blue-600 hover:bg-blue-700"
            >
              400-888-0001
            </Button>
            <Button
              icon={<MailOutlined />}
              block
              href="mailto:contact@zhihuicaishui.com"
            >
              咨询服务
            </Button>
          </div>
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;