import {
    query,
    queryWall
} from '../api/home'
export default {
    namespaced: true,
    state: {
        data: ['dawd'],
        anArr: []
    },
    mutations: {
        mquery(state, dataArr) {
            state.data = dataArr
        },
        wquery(state, dataArr) {
            state.anArr = dataArr
        },
        Update(state) {
            state.data.sort(() => {
                return Math.random() - Math.random();
            })
        }
    },
    actions: {
        queryData(context) {
            return query().then(res => {
                context.commit('mquery', res.data)
            })
        },
        queryWt(context) {
            return queryWall().then(res => {
                context.commit('wquery', res.data)
                return res.data;
            })
        }
    }
}