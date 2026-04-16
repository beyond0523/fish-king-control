// .prettierrc.js
module.exports = {
  // 每行最大字符数
  printWidth: 100,

  // 缩进空格数
  tabWidth: 2,

  // 使用空格缩进（false 表示使用 tab）
  useTabs: false,

  // 语句末尾加分号
  semi: false,

  // 使用单引号
  singleQuote: true,

  // 对象/数组最后一个元素是否加逗号
  trailingComma: 'es5',

  // 对象大括号内两侧加空格 { foo: bar }
  bracketSpacing: true,

  // 将 > 放在最后一行的末尾（用于 HTML/Vue）
  bracketSameLine: false,

  // 箭头函数参数始终加括号 (x) => x
  arrowParens: 'always',

  // 换行符类型
  endOfLine: 'auto',

  // Vue 文件中 script 和 style 标签内容缩进
  vueIndentScriptAndStyle: false,

  // 嵌入式语言格式化
  embeddedLanguageFormatting: 'auto',

  // 单个属性单独一行
  singleAttributePerLine: false,

  // HTML 空格敏感度
  htmlWhitespaceSensitivity: 'css',

  // Markdown 换行
  proseWrap: 'preserve',
}
