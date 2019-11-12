import {query} from '../api/home'
export default {
    namespaced: true,
    state: {
        data:['dawd']
    },
    mutations: {
        mquery(state,dataArr){
            // window.console.log(state,dataArr)
            state.data=dataArr
        }
    },
    actions: {
        queryData(context) {
            query().then(res=>{
                // window.console.log(res)
            context.commit('mquery',res.data)
            })
          }
    }
}