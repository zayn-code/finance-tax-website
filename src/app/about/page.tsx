import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "关于我们 - 专业财税服务团队 | 智慧财税",
  description: "智慧财税成立于2016年，专注为中小企业提供专业财税服务。拥有资深专业团队，服务客户1200+，客户满意度99%。了解我们的发展历程和核心团队。",
  keywords: "智慧财税,关于我们,财税服务公司,专业团队,公司简介,发展历程",
  openGraph: {
    title: "关于智慧财税 - 专业财税服务团队",
    description: "智慧财税：专业的财税服务团队，8年行业经验，服务客户1200+",
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: '张建华',
      position: '创始人 & CEO',
      description: '注册会计师，拥有15年财税行业经验，曾任职于知名会计师事务所',
      expertise: ['财务管理', '税务筹划', '企业咨询']
    },
    {
      name: '李美玲',
      position: '首席财务官',
      description: '高级会计师，专注于企业财务管理和内控体系建设',
      expertise: ['内控审计', '财务分析', '风险管理']
    },
    {
      name: '王强',
      position: '技术总监',
      description: '资深软件工程师，负责财税信息化系统的开发与维护',
      expertise: ['系统开发', '数据分析', '技术架构']
    },
    {
      name: '刘雯',
      position: '客户服务总监',
      description: '10年客户服务经验，致力于为客户提供优质的服务体验',
      expertise: ['客户关系', '服务优化', '团队管理']
    }
  ];

  const milestones = [
    {
      year: '2016',
      title: '公司成立',
      description: '智慧财税正式成立，开始为中小企业提供财税服务'
    },
    {
      year: '2018',
      title: '服务升级',
      description: '推出在线财税服务平台，提升服务效率和客户体验'
    },
    {
      year: '2020',
      title: '业务扩展',
      description: '服务范围扩展至全国，客户数量突破500家'
    },
    {
      year: '2022',
      title: '技术创新',
      description: '引入AI技术，实现智能化财税处理，服务效率大幅提升'
    },
    {
      year: '2024',
      title: '行业领先',
      description: '成为行业标杆，服务客户超过1200家，获得多项行业认证'
    }
  ];

  const values = [
    {
      title: '客户至上',
      description: '始终将客户需求放在首位，用心服务每一位客户',
      color: 'red'
    },
    {
      title: '专业专注',
      description: '专注财税领域，不断提升专业能力和服务水平',
      color: 'yellow'
    },
    {
      title: '创新进取',
      description: '积极拥抱新技术，持续创新服务模式和方法',
      color: 'blue'
    },
    {
      title: '诚信可靠',
      description: '坚持诚信经营，为客户提供可靠的财税服务保障',
      color: 'green'
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
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">首页</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">服务项目</Link>
            <Link href="/about" className="text-blue-600 font-medium">关于我们</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">联系我们</Link>
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
            <Link href="/" className="text-blue-600 hover:text-blue-800">首页</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">关于我们</span>
          </nav>
        </div>
      </div>

      {/* Company Introduction */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                关于智慧财税
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                智慧财税成立于2016年，是一家专注于为中小企业提供专业财税服务的公司。
                我们拥有资深的专业团队和先进的服务理念，致力于通过高品质的财税服务，
                帮助企业实现稳健发展。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                公司秉承&ldquo;专业、高效、诚信&rdquo;的服务理念，为客户提供代理记账、税务筹划、
                财务咨询等全方位的财税服务解决方案。
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">1200+</div>
                    <div className="text-gray-600">服务企业</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">50+</div>
                    <div className="text-gray-600">专业团队</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600">8</div>
                    <div className="text-gray-600">服务经验（年）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">99%</div>
                    <div className="text-gray-600">客户满意度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-xl text-gray-600">见证我们的成长足迹，与客户共同发展</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-xl text-gray-600">资深专业的团队成员，为您提供优质服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">企业价值观</h2>
            <p className="text-xl text-gray-600">我们的价值观指引着我们为客户提供更好的服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
                <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={`w-8 h-8 bg-${value.color}-500 rounded`}></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
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