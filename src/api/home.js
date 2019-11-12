import axios from './index'

export function query(){
    return axios.get('/game/list')
}

export function queryanli(){
    return 
}

export function queryWall(){
    return axios.get('/game/wall')
}