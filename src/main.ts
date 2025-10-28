import { createApp } from 'vue'
// import { useLicense } from '@vue-pdf-viewer/viewer'
import './style.css'
import App from './App.vue'

const app = createApp(App)
// useLicense('YOUR_LICENSE_KEY', app as any)
app.mount('#app')
