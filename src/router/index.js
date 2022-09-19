import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/DashboardView.vue'
import AboutView from '../views/AboutView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import QuestionView from '../views/QuestionView.vue'
import DescriptionView from '../views/DescriptionView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/stringApp',
            name: 'StringAppView',
            component: StringAppView
        },
        {
            path: '/basicMath',
            name: 'basicMath',
            component: BasicMathView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView
        },
        {
            path: '/vuetify',
            name: 'Vuetify',
            component: VuetifyView
        },
        {
            path: '/questions',
            name: 'Questions',
            component: QuestionView
        },
        {
            path: '/description',
            name: 'Description',
            component: DescriptionView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        }


    ]
})

export default router