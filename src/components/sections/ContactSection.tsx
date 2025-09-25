'use client';

import React from 'react';
import { Row, Col, Card, Form, Input, Button, Typography, Space } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // 这里处理表单提交逻辑
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-2xl text-blue-600" />,
      title: '联系电话',
      content: '400-888-0001',
      description: '工作日 9:00-18:00'
    },
    {
      icon: <MailOutlined className="text-2xl text-blue-600" />,
      title: '邮箱地址',
      content: 'contact@zhihuicaishui.com',
      description: '24小时内回复'
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-blue-600" />,
      title: '公司地址',
      content: '北京市朝阳区建国门外大街1号',
      description: '国贸大厦20层'
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-blue-600" />,
      title: '营业时间',
      content: '周一至周五 9:00-18:00',
      description: '节假日预约服务'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
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
            联系我们
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
            有任何财税问题或服务需求，欢迎随时联系我们。
            专业的客服团队将为您提供详细的咨询和解答
          </Paragraph>
        </motion.div>

        <Row gutter={[48, 48]} align="top">
          {/* 联系信息 */}
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Title level={3} className="text-2xl font-bold text-gray-900 mb-8">
                联系信息
              </Title>
              
              <Space direction="vertical" size="large" className="w-full">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <Title level={5} className="text-gray-900 mb-2">
                            {info.title}
                          </Title>
                          <Text className="text-lg font-medium text-gray-800 block mb-1">
                            {info.content}
                          </Text>
                          <Text className="text-gray-500">
                            {info.description}
                          </Text>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </Space>

              {/* 地图占位 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Card className="border-0 shadow-md">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <Text className="text-gray-500">地图位置</Text>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </Col>

          {/* 咨询表单 */}
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <Title level={3} className="text-2xl font-bold text-gray-900 mb-2">
                  免费咨询
                </Title>
                <Paragraph className="text-gray-600 mb-8">
                  填写下方表单，我们将在24小时内与您取得联系，为您提供专业的财税咨询服务
                </Paragraph>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  size="large"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        label="姓名"
                        rules={[{ required: true, message: '请输入您的姓名' }]}
                      >
                        <Input placeholder="请输入您的姓名" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="phone"
                        label="联系电话"
                        rules={[
                          { required: true, message: '请输入您的联系电话' },
                          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }
                        ]}
                      >
                        <Input placeholder="请输入您的联系电话" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="email"
                        label="邮箱地址"
                        rules={[
                          { type: 'email', message: '请输入正确的邮箱地址' }
                        ]}
                      >
                        <Input placeholder="请输入您的邮箱地址" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="company"
                        label="公司名称"
                      >
                        <Input placeholder="请输入您的公司名称" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="service"
                    label="咨询服务"
                  >
                    <Input placeholder="您需要咨询的服务类型" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="详细需求"
                    rules={[{ required: true, message: '请描述您的具体需求' }]}
                  >
                    <TextArea 
                      rows={4} 
                      placeholder="请详细描述您的财税服务需求，我们将为您提供针对性的解决方案"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      size="large" 
                      block
                      className="bg-blue-600 hover:bg-blue-700 h-12 text-lg font-medium"
                    >
                      提交咨询
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;