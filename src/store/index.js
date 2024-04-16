import { createStore } from "vuex"


export default createStore({
    state() {
        return {
            scale: null
        }
    },
    mutations: {
        SETSCALE(state, value) {
            state.scale = value
        }
    },
})