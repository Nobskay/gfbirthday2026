import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {
    colors: { ivory:'#fffaf4', cream:'#f8eee5', blush:'#efd4d5', rose:'#b87c82', 'deep-rose':'#754b53', gold:'#c5a46d', ink:'#3f3335' },
    fontFamily: { serif:['var(--font-cormorant)','Georgia','serif'], sans:['var(--font-inter)','Arial','sans-serif'] },
    boxShadow: { soft:'0 18px 60px rgba(117,75,83,.11)', card:'0 8px 30px rgba(93,58,65,.09)' },
    backgroundImage: { paper:'radial-gradient(circle at 20% 10%, rgba(255,255,255,.85), transparent 40%), linear-gradient(120deg,#fffdf9,#f9efe7)' }
  }}, plugins: []
};
export default config;
