import Vue from 'vue';
import Corner from './components/corner.vue';
import Formular from './components/formular.vue';
import css from '../css/global.css';

export default new Vue({
    el: '#app',
    components: { Corner, Formular }
});