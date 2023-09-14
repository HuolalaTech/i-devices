import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export default defineConfig({
  outputPath: 'dist',
  logo: '/logo.png',
  favicons: ["/favicon.ico"],
  // 是否要中英文
  // locales: [
  //   { id: 'en-US', name: 'English' },
  //   { id: 'zh-CN', name: '中文' }
  // ],
  themeConfig: {
    name: '',
    footer: `Copyright © 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a> and ♥ Yan Zhu·<a href="https://github.com/picturepan2/devices.css" target="_blank" rel="noopener noreferrer">GitHub</a>`,
    ...defineThemeConfig({
      description: 'Modern devices crafted in pure CSS',
      keywords: ['Mobile devices css']
    })
  },
});
