import Link from 'next/link';
import Navigation from './Navigation';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">智</span>
          </div>
          <span className="text-xl font-bold text-gray-800">智慧财税</span>
        </Link>
        <Navigation currentPath={currentPath} />
      </div>
    </header>
  );
}