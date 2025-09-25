'use client';

import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { 
  CalculatorOutlined, 
  FileProtectOutlined, 
  BankOutlined, 
  AuditOutlined,
  TeamOutlined,
  SafetyCertificateOutlined 
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <CalculatorOutlined className="text-4xl text-blue-600" />,
      title: '代理记账',
      description: '专业的会计团队为您提供精准的记账服务，确保财务数据准确无误',
      features: ['日常凭证录入', '月度财务报表', '纳税申报', '财务分析'],
      price: '起价 ¥300/月',
      link: '/services/accounting'
    },
    {
      icon: <FileProtectOutlined className="text-4xl text-green-600" />,
      title: '税务筹划',
      description: '合理合法的税务优化方案，帮助企业降低税务成本',
      features: ['税务风险评估', '税收优化方案', '政策解读', '税务培训'],
      price: '起价 ¥2000/次',
      link: '/services/tax-planning'
    },
    {
      icon: <BankOutlined className="text-4xl text-purple-600" />,
      title: '公司注册',
      description: '一站式公司注册服务，快速完成工商登记手续',
      features: ['核名查询', '工商注册', '税务登记', '银行开户'],
      price: '起价 ¥1000',
      link: '/services/company-registration'
    },
    {
      icon: <AuditOutlined className="text-4xl text-orange-600" />,
      title: '审计服务',
      description: '专业的审计团队，提供全面的财务审计服务',
      features: ['年度审计', '专项审计', '内控审计', '审计报告'],
      price: '起价 ¥5000/次',
      link: '/services/audit'
    },
    {
      icon: <TeamOutlined className="text-4xl text-red-600" />,
      title: '财务咨询',
      description: '资深财务专家为您提供专业的财务管理咨询',
      features: ['财务诊断', '管理优化', '投融资咨询', '战略规划'],
      price: '起价 ¥500/小时',
      link: '/services/consulting'
    },
    {
      icon: <SafetyCertificateOutlined className="text-4xl text-indigo-600" />,
      title: '合规服务',
      description: '确保企业财务合规，规避法律风险',
      features: ['合规检查', '制度建设', '风险控制', '法律咨询'],
      price: '起价 ¥1500/次',
      link: '/services/compliance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
            专业服务项目
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供全方位的财税服务，覆盖企业经营的各个环节，
            让您享受一站式专业服务体验
          </Paragraph>
        </motion.div>

        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                  bodyStyle={{ padding: '32px' }}
                >
                  <div className="text-center mb-6">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <Title level={3} className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </Title>
                    <Paragraph className="text-gray-600 mb-4">
                      {service.description}
                    </Paragraph>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-3">服务内容：</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        {service.price}
                      </span>
                    </div>
                    <Link href={service.link}>
                      <Button type="primary" block size="large" className="bg-blue-600 hover:bg-blue-700">
                        了解详情
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            type="primary" 
            size="large" 
            className="bg-blue-600 hover:bg-blue-700 h-12 px-8"
          >
            查看全部服务
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;