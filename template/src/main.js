import App from './App';
{% if useStore %}
import store from './store'
{% endif %}
{% if vue3 %}
import { createApp } from 'vue';

const app = createApp({
  ...App
});

{% if useStore %}
app.use(store);
{% endif %}
app.mount();
{% else %}
import Vue from 'vue';
{% if uViewUI %}
import uView from "uview-ui";
Vue.use(uView);
{% endif %}
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  ...App,
{% if useStore %}
  store
{% endif %}
});

app.$mount();
{% endif %}