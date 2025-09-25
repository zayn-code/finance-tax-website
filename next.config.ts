import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack 配置
  turbopack: {
    root: __dirname
  },
  // 输出配置
  output: 'standalone', // 用于 Docker 部署
  // 图片优化
  images: {
    unoptimized: false,
    domains: [], // 如需外部图片域名，在此添加
  },
  // 重写 URL（可选）
  async rewrites() {
    return [
      // 示例：API 代理
      // {
      //   source: '/api/:path*',
      //   destination: 'https://api.example.com/:path*'
      // }
    ];
  },
};

export default nextConfig;
