import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Vercel部署后会自动替换为实际域名
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://finance-tax-website.vercel.app'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}