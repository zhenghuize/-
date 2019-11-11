import axios from './index';

export function addcat({id,userid}){
    window.console.log(id,userid)
    // return axios.post('/game/addwishlist',{
    //     id,
    //     userid
    // })
}

export function login(){
    return axios.get('/user/login')
}

export function queryInfo(id) {
    return axios.get('/game/info', {
        params: {
            id
        }
    })
}
export function queryComment(id) {
    return axios.get('/game/comment', {
        params: {
            id
        }
    })
}

export function addComment({
    id,
    userid,
    username,
    comment,
    score
}) {
    window.console.log(id,
        userid,
        username,
        comment,
        score)
    return axios.post('/game/addcomment', {
        id,
        userid,
        username,
        comment,
        score
    })
}