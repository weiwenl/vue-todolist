import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskList from '../views/TaskList.vue'
import TaskCreate from '../views/TaskCreate.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'task-list',
        component: TaskList
    },
    {
        path: '/create',
        name: 'task-create',
        component: TaskCreate
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;