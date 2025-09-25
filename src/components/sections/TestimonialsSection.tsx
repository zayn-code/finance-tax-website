'use client';

import React from 'react';
import { Row, Col, Card, Typography, Rate, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: '张总',
      company: '北京某科技有限公司',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang',
      rating: 5,
      content: '智慧财税的代理记账服务非常专业，帮助我们公司节省了大量时间和成本。会计师的专业素养很高，每月的财务报表都很及时准确。强烈推荐！',
      position: 'CEO'
    },
    {
      name: '李经理',
      company: '上海某贸易公司',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=li',
      rating: 5,
      content: '在税务筹划方面给了我们很大帮助，通过合理的税务安排为公司节省了不少成本。团队响应速度快，服务态度好，是值得信赖的合作伙伴。',
      position: '财务经理'
    },
    {
      name: '王总',
      company: '深圳某制造企业',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
      rating: 5,
      content: '从公司注册到后续的财务管理，智慧财税都提供了一站式服务。专业性强，服务效率高，让我们这些创业者省心不少。感谢专业团队的支持！',
      position: '创始人'
    },
    {
      name: '刘女士',
      company: '成都某咨询公司',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liu',
      rating: 5,
      content: '审计服务非常细致专业，帮助我们发现了财务管理中的一些问题并提供了改进建议。团队的敬业精神和专业水平都让人印象深刻。',
      position: '合伙人'
    },
    {
      name: '陈总',
      company: '杭州某电商企业',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chen',
      rating: 5,
      content: '财务咨询服务为我们公司的发展提供了很好的指导。专业的建议帮助我们优化了财务结构，提高了资金使用效率。非常满意的合作体验。',
      position: 'CFO'
    },
    {
      name: '赵经理',
      company: '西安某服务公司',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhao',
      rating: 5,
      content: '合规服务帮助我们建立了完善的财务制度，有效规避了经营风险。团队不仅专业而且服务态度很好，随时解答我们的疑问。值得推荐！',
      position: '运营总监'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            客户评价
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说，真实的评价见证我们的专业与用心
          </Paragraph>
        </motion.div>

        {/* 评价卡片 */}
        <Row gutter={[24, 24]}>
          {testimonials.map((testimonial, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  bodyStyle={{ padding: '32px' }}
                >
                  {/* 评分 */}
                  <div className="mb-4">
                    <Rate disabled defaultValue={testimonial.rating} className="text-lg" />
                  </div>

                  {/* 评价内容 */}
                  <Paragraph className="text-gray-600 leading-relaxed mb-6 min-h-[120px]">
                    "{testimonial.content}"
                  </Paragraph>

                  {/* 客户信息 */}
                  <div className="flex items-center space-x-4 border-t pt-6">
                    <Avatar 
                      size={56} 
                      src={testimonial.avatar}
                      icon={<UserOutlined />}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <Title level={5} className="text-gray-900 mb-1 truncate">
                        {testimonial.name}
                      </Title>
                      <Text className="text-blue-600 font-medium block">
                        {testimonial.position}
                      </Text>
                      <Text className="text-gray-500 text-sm block truncate">
                        {testimonial.company}
                      </Text>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* 客户Logo展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Title level={3} className="text-2xl font-bold text-gray-900 mb-8">
            合作客户
          </Title>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* 这里可以放置客户Logo */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <Text className="text-gray-500 font-medium">
                  客户Logo {item}
                </Text>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;