import home from './components/home.vue'
import works from './components/works.vue'
import about from './components/about-me.vue'
import contact from './components/contact.vue'
export default [
    { path: '/', component: home },
    {path: '/works', component: works},
    {path: '/about', component: about},
    {path: '/contact', component: contact},
]