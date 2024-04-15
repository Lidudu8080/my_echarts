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
            // {
            //     path:"page1",
            //     name:"page1",
            //     title:"应急广播",
            //     component :()=>import("@/views/partyBuilding.vue")
            // },
            // {
            //     path:"page2",
            //     name:"page2",
            //     title:"雪亮工程",
            //     component :()=>import("@/views/production.vue")
            // },
            // {
            //     path:"page3",
            //     name:"page3",
            //     title:"公共服务",
            //     component :()=>import("@/views/manage.vue")
            // },
        ]
    }
]