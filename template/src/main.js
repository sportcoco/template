import App from './App';
{% if vue3 %}
import { createApp } from 'vue';

const app = createApp({
  ...App
});

app.mount();
{% else %}
import Vue from 'vue';
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  ...App
});

app.$mount();
{% endif %}









