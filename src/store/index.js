import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        openBar: false
    },
    getters: {
        count: state => state.count,
        openBar: state => state.openBar,
    },
    mutations: {
        increment(state) {
            state.count++
        },
        // 切换侧列表 bar
        toggoleBar(state) {
            state.openBar = state.openBar === false ? true : false;
            console.log('openBar' + state.openBar)
        }
    }
})

export default store
