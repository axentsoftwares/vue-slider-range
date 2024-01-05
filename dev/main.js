import { createApp } from 'vue';
import App from './App.vue';
import VueSliderRange from '@/index';

import 'axentix/dist/axentix.min.css';

const app = createApp(App);
app.component('vue-slider-range', VueSliderRange);
app.mount('#app');
