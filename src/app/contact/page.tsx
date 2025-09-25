'use client';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      title: '电话咨询',
      primary: '400-888-0001',
      secondary: '010-8888-0001',
      description: '工作日 9:00-18:00，节假日值班',
      color: 'blue'
    },
    {
      title: '邮件咨询',
      primary: 'contact@zhihuicaishui.com',
      secondary: 'service@zhihuicaishui.com',
      description: '24小时内回复，详细咨询',
      color: 'green'
    },
    {
      title: '微信咨询',
      primary: '智慧财税服务',
      secondary: '微信号: zhihuicaishui',
      description: '扫码添加，实时沟通',
      color: 'purple'
    },
    {
      title: 'QQ咨询',
      primary: 'QQ群: 888888888',
      secondary: '客服QQ: 123456789', 
      description: '在线客服，快速响应',
      color: 'orange'
    }
  ];

  // 删除了未使用的 offices 和 faqs 数据
  // const offices = [...]
  // const faqs = [...]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('表单提交');
  };

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
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">关于我们</Link>
            <Link href="/contact" className="text-blue-600 font-medium">联系我们</Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              400-888-0001
            </button>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">联系我们</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            有任何财税问题或服务需求，欢迎通过以下方式联系我们。
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">多种联系方式</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className={`w-16 h-16 ${method.color === 'blue' ? 'bg-blue-100' : method.color === 'green' ? 'bg-green-100' : method.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={`w-8 h-8 ${method.color === 'blue' ? 'bg-blue-600' : method.color === 'green' ? 'bg-green-600' : method.color === 'purple' ? 'bg-purple-600' : 'bg-orange-600'} rounded`}></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">{method.primary}</p>
                <p className="text-gray-600 mb-4">{method.secondary}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">在线咨询</h2>
            <p className="text-xl text-gray-600">填写表单，我们将在24小时内与您联系</p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">联系电话</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="请输入您的联系电话"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">咨询内容</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请详细描述您的财税服务需求"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-medium text-lg"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 智慧财税. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}