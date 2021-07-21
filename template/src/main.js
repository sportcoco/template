import App from './App';
{% if !vue3 %}
import Vue from 'vue';
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  ...App
});
{% else %}
import { createApp } from 'vue';

const app = createApp({
  ...App
});
{% endif %}

app.$mount();







