'use client';

import React from 'react';
import { Button, Row, Col, Typography, Space } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title level={1} className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                专业的
                <span className="text-blue-600"> 财税服务</span>
                <br />
                助力企业发展
              </Title>
              
              <Paragraph className="text-xl text-gray-600 mb-8 leading-relaxed">
                我们为中小企业提供一站式财税解决方案，包括代理记账、税务筹划、
                公司注册等专业服务，让您专注于核心业务发展。
              </Paragraph>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">服务企业</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">专业团队</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">99%</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
              </div>

              <Space size="large" wrap>
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-lg"
                >
                  免费咨询
                </Button>
                <Button
                  size="large"
                  icon={<PlayCircleOutlined />}
                  className="h-12 px-8 text-lg"
                >
                  观看介绍
                </Button>
              </Space>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Hero Image/Illustration */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl font-bold">智</span>
                    </div>
                    <Title level={3} className="text-gray-700 mb-2">
                      智慧财税管理平台
                    </Title>
                    <Paragraph className="text-gray-500">
                      专业 · 高效 · 可信赖
                    </Paragraph>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <div className="text-xs">税务优化</div>
                  <div className="font-bold">节省30%</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <div className="text-xs">效率提升</div>
                  <div className="font-bold">快10倍</div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HeroSection;