import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        openBar: 0
    },
    mutations: {
        increment(state) {
            state.count++
        },
        // 切换侧列表 bar
        toggoleBar(openBar) {
            state.openBar = openBar;
        }
    }
})

export default store
