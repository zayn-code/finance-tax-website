import Link from 'next/link';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const navItems = [
    { href: '/', label: '首页' },
    { href: '/services', label: '服务项目' },
    { href: '/about', label: '关于我们' },
    { href: '/contact', label: '联系我们' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`font-medium transition-colors duration-200 ${
            currentPath === item.href
              ? 'text-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          {item.label}
        </Link>
      ))}
      <Link
        href="tel:400-888-0001"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
      >
        400-888-0001
      </Link>
    </nav>
  );
}