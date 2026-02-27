import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Privacy from './components/Privacy.vue'
import Terms from './components/Terms.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/privacy', component: Privacy },
    { path: '/terms', component: Terms }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
