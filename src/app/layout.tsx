import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: '智慧财税 - 专业的财税服务平台',
    template: '%s | 智慧财税'
  },
  description: '提供专业的财务咨询、税务筹划、代理记账等一站式财税服务',
  keywords: '财税服务,代理记账,税务筹划,财务咨询,会计服务',
  authors: [{ name: '智慧财税' }],
  creator: '智慧财税',
  publisher: '智慧财税',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://zhihuicaishui.com',
    siteName: '智慧财税',
    title: '智慧财税 - 专业的财税服务平台',
    description: '提供专业的财务咨询、税务筹划、代理记账等一站式财税服务',
  },
  twitter: {
    card: 'summary_large_image',
    title: '智慧财税 - 专业的财税服务平台',
    description: '提供专业的财务咨询、税务筹划、代理记账等一站式财税服务',
  },
  verification: {
    // google: 'google-site-verification-code', // 在实际部署时添加
    // baidu: 'baidu-site-verification-code', // 在实际部署时添加
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ConfigProvider
          locale={zhCN}
          theme={{
            token: {
              colorPrimary: '#1890ff',
              borderRadius: 6,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
