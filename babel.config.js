module.exports = {
  presets:[
      "@babel/preset-env"
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`,
        // style: true,
      },
      'vant',
    ],
  ],
}