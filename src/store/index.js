import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        openBar: 0
    },
    getters: {
        count: state => state.count
    },
    mutations: {
        increment(state) {
            state.count++
        },
        // 切换侧列表 bar
        toggoleBar(state) {
            console.log(state)
            state.openBar = state.openBar === 0 ? 1 : 0;
        }
    }
})

export default store
