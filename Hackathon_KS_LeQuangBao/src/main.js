// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const app=createApp(App);
app.use(router)
app.mount("#app")
const vuetify = createVuetify({
    components,
    directives,
  })
app.use(vuetify)