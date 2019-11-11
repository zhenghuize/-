import axios from './index';

// 登录
export function userLogin(account, password) {
    return axios.post('/user/login', {
        account,
        password
    });
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
    window.console.log(options);
    return axios.post('/user/update', options)
}

//获取心愿墙信息
export function wishList(userid) {
    return axios.get('/game/wishlist', {
        params: {
            userid
        }
    })
}

//获取仓库数据
export function wareHouse(userid) {
    window.console.log(userid);
    return axios.get('/game/warehouse', {
        params: {
            userid
        }
    })
}