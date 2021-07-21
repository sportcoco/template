module.exports = {
  prompts: {
    description: {
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'A mult-side project'
    },
    author: {
      type: 'string',
      message: '作者'
    },
    vue3: {
      type: 'confirm',
      message: '是否使用Vue3,（仅支持小程序，详情：https://ask.dcloud.net.cn/article/37834）',
      default: false
    }
  }
};
