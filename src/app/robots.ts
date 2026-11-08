import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots {return {rules:{userAgent:'*',allow:'/'},sitemap:'https://movegridsolutions.com/sitemap.xml',host:'https://movegridsolutions.com'};}
