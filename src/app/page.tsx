import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">关于我们</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">联系我们</Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              400-888-0001
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                专业的
                <span className="text-blue-600"> 财税服务</span>
                <br />
                助力企业发展
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                我们为中小企业提供一站式财税解决方案，包括代理记账、税务筹划、
                公司注册等专业服务，让您专注于核心业务发展。
              </p>
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
              <div className="space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
                  免费咨询
                </button>
                <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium text-lg">
                  观看介绍
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl font-bold">智</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">
                      智慧财税管理平台
                    </h3>
                    <p className="text-gray-500">
                      专业 · 高效 · 可信赖
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">代理记账</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">税务筹划</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">公司注册</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">审计服务</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">公司简介</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">专业团队</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">成功案例</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400">最新资讯</Link></li>
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
