import { createApp } from 'vue'
import App from './App.vue'
import { VuelidatePlugin } from "@vuelidate/core"
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'
import 'popper.js'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(VuelidatePlugin).use(router).use(VueAxios,axios).mount('#app')
