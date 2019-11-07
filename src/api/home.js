import axios from './index'

export function query(){
    return axios.get('/game/list')
}