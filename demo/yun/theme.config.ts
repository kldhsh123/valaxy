import { defineConfig } from 'valaxy';
import type { ThemeConfig } from 'valaxy-theme-yun';

/**
 * User Config
 */
export default defineConfig<ThemeConfig>({
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '开朗的火山河',
    },

    pages: [
    ],

    footer: {
      since: 2016,
      beian: {
        enable: true,
        icp: '我就喜欢绕过管局不备案',
      },
    },
  },
});
