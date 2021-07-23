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
      message: '是否使用 Vue3,（仅支持小程序，详情：https://ask.dcloud.net.cn/article/37834）',
      default: false
    },
    useUI: {
      type: 'confirm',
      message: '是否使用 UI 框架',
      default: true
    },
    UI: {
      when: 'useUI === true',
      type: 'checkbox',
      message: '请选择 UI 框架（多选）',
      choices: (val) => {
        const baseUI = [
          {
            name: 'uni-ui',
            value: {
              name: 'uniUI',
              pkg: `"@dcloudio/uni-ui": "^1.3.7"`,
              easycom: `"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"`
            }
          }
        ];
        const uViewUI = [
          {
            name: 'uview-ui',
            value: {
              name: 'uViewUI',
              pkg: `"uview-ui": "^1.8.4"`,
              easycom: `"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"`
            }
          }
        ];

        return val.vue3 ? baseUI : baseUI.concat(uViewUI);
      },
      default: []
    }
  },
  computed: {
    uniUI() {
      return this.UI.some((e) => e.name === 'uniUI');
    },
    uViewUI() {
      return this.UI.some((e) => e.name === 'uViewUI');
    },
    useEasycom() {
      const arr = this.UI.map((e) => e.easycom);
      return `"easycom":{ ${arr.join(',')} }`;
    }
  }
};
