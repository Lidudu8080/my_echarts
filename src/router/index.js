import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: "/main"
    },
    {
        name: "main",
        path: "/main",
        component: () => import("@/views/main.vue"),
        redirect: "/main/page0",
        children: [
            {
                path: "page0",
                name: "page0",
                title: "首页",
                component: () => import("@/views/home.vue")
            },
        ]
    }
]

export default createRouter({
    routes,
    history: createWebHashHistory()
})