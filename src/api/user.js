import axios from './index';

// 登录
export function userLogin(account, password) {
    return axios.post('/user/login', {
        account,
        password
    });
}
//修改密码
export function xiuPass(id,password){
    return axios.post('/user/resetpassword',{
        id,
        password
    })
}

//退出登录
export function out() {
    return axios.get('/user/signout');
}
//检测是否登录
export function jiance() {
    return axios.get('/user/login');
}
//注册
export function userZhuce(account, password) {
    return axios.post('/user/signup', {
        account,
        password
    }).then(result => {
        if (parseInt(result.code) === 0) {
            return true;
        }
        return Promise.reject(result.codeText);
    });
}

//获取个人信息
export function userInfo() {
    return axios.get('/user/userinfo')
}


//修改个人信息
export function updateInfo(options) {
    return axios.post('/user/update', options)
}

//获取心愿墙信息
export function wishList(userid) {
    return axios.get('/game/wishlist', {
        params: {
            userid
        }
    }).then(result => {
        if (parseInt(result.code) === 0) {
            return result.data;
        }
        return Promise.reject(result);
    })
}

//获取仓库数据
export function wareHouse(userid) {
    return axios.get('/game/warehouse', {
        params: {
            userid
        }
    }).then(result => {
        if (parseInt(result.code) === 0) {
            return result.data;
        }
        return Promise.reject(result);
    })
}

// 添加仓库
export function addWareHouse(id, userid) {
    return axios.post('/game/addwarehouse', {
        id,
        userid
    });
}