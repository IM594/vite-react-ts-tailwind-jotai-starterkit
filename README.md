vite-react-ts-tailwind-jotai-starterkit

Tips

- 如果只通过 Vite 插件来集成 Tailwind（也就是只装了 tailwindcss 和 @tailwindcss/vite），Vite 会自动在内部给你挂载好 PostCSS 和 Tailwind 的编译流程，不用再额外写 postcss.config.mjs
- 只有当想在同一个 PostCSS 流程里额外使用如 autoprefixer、cssnano 等其他插件时，才需要再补一个 postcss.config.\* 文件

  ```bash
  pnpm add -D autoprefixer

  // 然后会在 package.json 里多出
  // "@tailwindcss/postcss": "^4.1.10",
  // "postcss": "^8.5.6",
  ```

  然后在根目录下创建 postcss.config.mjs：

  ```js
  // postcss.config.mjs
  export default {
    plugins: {
      "@tailwindcss/postcss": {}, // Tailwind 本身的 PostCSS 插件
      autoprefixer: {}, // 自动添加前缀
    },
  };
  ```
