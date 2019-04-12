import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

//自定义添加
import Vue from 'vue';
import '../src/assets/js/flexible';
import Iview from 'iview';
import 'iview/dist/styles/iview.css';
import CustomUI from '../src/index.js';

//全局引用
Vue.use(Iview);
Vue.use(CustomUI);

storiesOf('钱盆UI|Buttons', module)
  .addDecorator(withKnobs)
  .add('水波纹按钮', () => ({
    template: `<ripple-btn>{{text}}</ripple-btn>`,
    data() {
      return {
        text: text('Label', '水波纹按钮')
      };
    }
  }));
