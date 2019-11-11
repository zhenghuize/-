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
            window.console.log(state, dataArr)
            state.data = dataArr
        },
        wquery(state, dataArr) {
            window.console.log(state, dataArr)
            state.anArr = dataArr
        },
        Update(state) {
            let n = state.data.length;
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            state.data.sort(() => {
                return Math.random() - Math.random();
            })
            window.console.log(arr,n)
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