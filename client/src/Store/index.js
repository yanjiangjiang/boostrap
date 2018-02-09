import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const store = new vuex.Store({
    state: {
        options: [{
            value: '选项1',
            label: '朝阳区'
        }, {
            value: '选项2',
            label: '西城区'
        }, {
            value: '选项3',
            label: '东城区'
        }, {
            value: '选项4',
            label: '大兴区'
        }, {
            value: '选项5',
            label: '通州区'
        }]
    }
})
export default store;