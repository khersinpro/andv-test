import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import reverse from '@/directive/reverse'

const app = createApp(App)

app.use(router)

app.directive('reverse', reverse)

app.mount('#app')
