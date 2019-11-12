import {
    queryInfo,
    queryComment,
    addComment,
    login,addcat
} from '../api/details';
export default {
    namespaced: true,
    state: {
        mydata: null,
        Ct: 'dawd'
    },
    mutations: {
        mquery(state, dataArr) {
            state.mydata = dataArr[0]
        },
        cquery(state, dataArr) {
            state.Ct = dataArr
        }
    },
    actions: {
        addW(context,obj){
           return addcat(obj)
        },
        isLogin() {
            return login()
        },
        queryData(context, id) {
            return queryInfo(id).then(res => {
                context.commit('mquery', res.data)
            })
        },
        queryCt(context, id) {
            return queryComment(id).then(res => {
                res.data.forEach(item => {
                    item.score = parseInt(item.score);
                })
                context.commit('cquery', res.data)
            })
        },
        addCt(context, obj) {
            return addComment(obj);
        }
    }
}