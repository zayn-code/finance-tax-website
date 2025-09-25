import React from 'react';
import { Layout, Row, Col, Space, Typography, Divider } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, WechatOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <Row gutter={[32, 32]}>
          {/* 公司信息 */}
          <Col xs={24} sm={12} lg={6}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">智</span>
                </div>
                <Title level={4} className="text-white m-0">智慧财税</Title>
              </div>
              <Text className="text-gray-300">
                专注于为中小企业提供专业、高效的财税服务，
                让您的企业财务管理更轻松。
              </Text>
            </div>
          </Col>

          {/* 服务项目 */}
          <Col xs={24} sm={12} lg={6}>
            <Title level={5} className="text-white">服务项目</Title>
            <div className="space-y-2">
              <Link href="/services/accounting" className="block text-gray-300 hover:text-blue-400">
                代理记账
              </Link>
              <Link href="/services/tax-planning" className="block text-gray-300 hover:text-blue-400">
                税务筹划
              </Link>
              <Link href="/services/company-registration" className="block text-gray-300 hover:text-blue-400">
                公司注册
              </Link>
              <Link href="/services/audit" className="block text-gray-300 hover:text-blue-400">
                审计服务
              </Link>
              <Link href="/services/consulting" className="block text-gray-300 hover:text-blue-400">
                财务咨询
              </Link>
            </div>
          </Col>

          {/* 关于我们 */}
          <Col xs={24} sm={12} lg={6}>
            <Title level={5} className="text-white">关于我们</Title>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-blue-400">
                公司简介
              </Link>
              <Link href="/about/team" className="block text-gray-300 hover:text-blue-400">
                专业团队
              </Link>
              <Link href="/about/certificates" className="block text-gray-300 hover:text-blue-400">
                资质证书
              </Link>
              <Link href="/about/cases" className="block text-gray-300 hover:text-blue-400">
                成功案例
              </Link>
              <Link href="/about/news" className="block text-gray-300 hover:text-blue-400">
                最新资讯
              </Link>
            </div>
          </Col>

          {/* 联系方式 */}
          <Col xs={24} sm={12} lg={6}>
            <Title level={5} className="text-white">联系我们</Title>
            <Space direction="vertical" size="middle" className="w-full">
              <div className="flex items-center space-x-2">
                <PhoneOutlined className="text-blue-400" />
                <Text className="text-gray-300">400-888-0001</Text>
              </div>
              <div className="flex items-center space-x-2">
                <MailOutlined className="text-blue-400" />
                <Text className="text-gray-300">contact@zhihuicaishui.com</Text>
              </div>
              <div className="flex items-center space-x-2">
                <EnvironmentOutlined className="text-blue-400" />
                <Text className="text-gray-300">
                  北京市朝阳区建国门外大街1号<br />
                  国贸大厦20层
                </Text>
              </div>
              <div className="flex items-center space-x-2">
                <WechatOutlined className="text-blue-400" />
                <Text className="text-gray-300">微信: zhihuicaishui</Text>
              </div>
            </Space>
          </Col>
        </Row>

        <Divider className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Text className="text-gray-400 text-sm">
            © {currentYear} 智慧财税. All rights reserved. | 京ICP备12345678号
          </Text>
          <Space size="middle">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
              隐私政策
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
              服务条款
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm">
              网站地图
            </Link>
          </Space>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;