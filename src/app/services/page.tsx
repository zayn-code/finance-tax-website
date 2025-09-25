import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "财税服务项目 - 代理记账、税务筹划、公司注册 | 智慧财税",
  description: "智慧财税提供专业的财税服务项目：代理记账、税务筹划、公司注册、审计服务、财务咨询、合规服务。专业团队，优质服务，助力企业发展。",
  keywords: "代理记账,税务筹划,公司注册,审计服务,财务咨询,合规服务,财税服务,会计服务",
  openGraph: {
    title: "财税服务项目 - 智慧财税",
    description: "专业的财税服务项目，包括代理记账、税务筹划、公司注册等全方位服务",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: '代理记账',
      description: '专业的会计团队为您提供精准的记账服务，确保财务数据准确无误，让您专注于业务发展。',
      features: [
        '日常凭证录入与审核',
        '月度财务报表编制', 
        '纳税申报与缴费',
        '财务数据分析报告',
        '账务咨询与指导',
        '财务制度建设'
      ],
      price: '起价 ¥300/月',
      color: 'blue',
      highlight: true
    },
    {
      title: '税务筹划',
      description: '合理合法的税务优化方案，帮助企业降低税务成本，提高资金使用效率。',
      features: [
        '税务风险全面评估',
        '个性化税收优化方案',
        '最新税收政策解读',
        '税务合规性检查',
        '税务培训与指导',
        '税务争议处理'
      ],
      price: '起价 ¥2000/次',
      color: 'green'
    },
    {
      title: '公司注册',
      description: '一站式公司注册服务，快速完成工商登记手续，助您快速开启创业之路。',
      features: [
        '公司名称核准查询',
        '工商注册登记',
        '税务登记办理',
        '银行开户协助',
        '印章刻制服务',
        '营业执照办理'
      ],
      price: '起价 ¥1000',
      color: 'purple'
    },
    {
      title: '审计服务',
      description: '专业的审计团队，提供全面的财务审计服务，确保财务信息的真实性和准确性。',
      features: [
        '年度财务报告审计',
        '专项业务审计',
        '内部控制审计',
        '合规性审计',
        '审计报告出具',
        '审计整改建议'
      ],
      price: '起价 ¥5000/次',
      color: 'orange'
    },
    {
      title: '财务咨询',
      description: '资深财务专家为您提供专业的财务管理咨询，优化财务结构，提升经营效率。',
      features: [
        '财务现状诊断分析',
        '财务管理制度设计',
        '投融资方案咨询',
        '成本控制优化',
        '财务战略规划',
        '风险管理咨询'
      ],
      price: '起价 ¥500/小时',
      color: 'red'
    },
    {
      title: '合规服务',
      description: '确保企业财务合规运营，建立完善的内控制度，有效规避经营风险。',
      features: [
        '财务合规性检查',
        '内控制度建设',
        '风险识别与控制',
        '合规培训服务',
        '法律法规咨询',
        '合规整改指导'
      ],
      price: '起价 ¥1500/次',
      color: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">智</span>
            </div>
            <span className="text-xl font-bold text-gray-800">智慧财税</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">首页</a>
            <a href="/services" className="text-blue-600 font-medium">服务项目</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">关于我们</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">联系我们</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              400-888-0001
            </button>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-800">首页</a>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">服务项目</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            专业服务项目
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供全方位的财税服务解决方案，从基础的代理记账到高端的财务咨询，
            为不同规模的企业提供专业、高效、可靠的财税服务支持。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border ${
                  service.highlight ? 'ring-2 ring-blue-200 relative' : ''
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      热门推荐
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={`w-8 h-8 bg-${service.color}-600 rounded`}></div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    服务内容
                  </h4>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-600">
                      {service.price}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                      了解详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            不确定选择哪项服务？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            我们的专业顾问将为您提供免费咨询，根据您的具体需求推荐最适合的服务方案。
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
              免费咨询
            </button>
            <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium">
              在线客服
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">智</span>
                </div>
                <span className="text-xl font-bold">智慧财税</span>
              </div>
              <p className="text-gray-300">
                专注于为中小企业提供专业、高效的财税服务。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">服务项目</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400">代理记账</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400">税务筹划</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400">公司注册</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400">审计服务</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400">公司简介</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400">专业团队</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400">成功案例</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400">最新资讯</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">400-888-0001</li>
                <li className="text-gray-300">contact@zhihuicaishui.com</li>
                <li className="text-gray-300">北京市朝阳区建国门外大街20层</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 智慧财税. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}