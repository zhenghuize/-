import axios from './index'
//获取游戏信息列表
export function gameList() {
    return axios.get('/game/list').then(result => {
        return result
    })
}
//获取每日新发现信息
export function newDay() {
    return axios.get('/game/discovery').then(result => {
        return result
    })
}
//获取新游预约信息
export function newGame() {
    return axios.get('/game/order').then(result => {
        return result
    })
}
//获取推荐玩家信息
export function recommendedPlayer() {
    return axios.get('/game/player').then(result => {
        return result
    })
}
