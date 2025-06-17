// postcss.config.mjs
export default {
    plugins: {
      '@tailwindcss/postcss': {},  // Tailwind 本身的 PostCSS 插件
      autoprefixer: {},            // 自动添加前缀
    },
  }