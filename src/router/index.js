import { createWebHistory, createRouter} from 'vue-router'

import Gastos from '../components/Gastos.vue'
import Formulario from '../components/Formulario.vue'
import MultipleChoice from '../components/MultipleChoice.vue'

const routes = [
    {path: '/gastos', name:'Gastos', component:Gastos},
    {path: '/formulario', name:'Formulario', component:Formulario},
    {path: '/preguntas', name:'Preguntas', component:MultipleChoice}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router