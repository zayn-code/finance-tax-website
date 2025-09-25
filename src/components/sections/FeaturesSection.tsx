'use client';

import React from 'react';
import { Row, Col, Card, Typography, Statistic } from 'antd';
import { 
  ClockCircleOutlined, 
  SafetyCertificateOutlined, 
  TeamOutlined, 
  CustomerServiceOutlined,
  TrophyOutlined,
  RocketOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ClockCircleOutlined className="text-4xl text-blue-600" />,
      title: '高效快速',
      description: '24小时快速响应，专业团队高效作业，为您节省宝贵时间'
    },
    {
      icon: <SafetyCertificateOutlined className="text-4xl text-green-600" />,
      title: '安全可靠',
      description: '严格的数据保密制度，确保客户信息和财务数据安全无忧'
    },
    {
      icon: <TeamOutlined className="text-4xl text-purple-600" />,
      title: '专业团队',
      description: '资深注册会计师领衔，经验丰富的专业团队为您保驾护航'
    },
    {
      icon: <CustomerServiceOutlined className="text-4xl text-orange-600" />,
      title: '贴心服务',
      description: '一对一专属客服，全程跟踪服务进度，及时解答您的疑问'
    },
    {
      icon: <TrophyOutlined className="text-4xl text-red-600" />,
      title: '品质保证',
      description: '严格的质量控制体系，确保每一项服务都达到最高标准'
    },
    {
      icon: <RocketOutlined className="text-4xl text-indigo-600" />,
      title: '持续创新',
      description: '紧跟政策变化，运用最新技术，为您提供与时俱进的服务'
    }
  ];

  const statistics = [
    { title: '服务企业', value: 1200, suffix: '+', prefix: '' },
    { title: '专业团队', value: 50, suffix: '+', prefix: '' },
    { title: '服务经验', value: 8, suffix: '年', prefix: '' },
    { title: '客户满意度', value: 99, suffix: '%', prefix: '' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Title level={2} className="text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
            凭借多年的行业经验和专业的服务团队，我们为客户提供最优质的财税服务，
            成为您值得信赖的财税合作伙伴
          </Paragraph>
        </motion.div>

        {/* 特色优势 */}
        <Row gutter={[32, 32]} className="mb-20">
          {features.map((feature, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  bodyStyle={{ padding: '40px 24px' }}
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <Title level={3} className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </Title>
                  <Paragraph className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* 数据统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 border-0">
            <Row gutter={[32, 32]}>
              {statistics.map((stat, index) => (
                <Col xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Statistic
                      title={
                        <span className="text-blue-100 text-lg font-medium">
                          {stat.title}
                        </span>
                      }
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      valueStyle={{ 
                        color: '#fff', 
                        fontSize: '2.5rem', 
                        fontWeight: 'bold' 
                      }}
                    />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;