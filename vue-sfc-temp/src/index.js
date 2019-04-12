/*
 * 引入组件 import
 */

import RippleBtn from './btns/ripple-btn';
const components = [
  RippleBtn,
  // Loading,
  // ...如果还有的话继续添加
];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });


  //定义全局方法
  // Vue.prototype.$toast...
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components
};

export default API;
