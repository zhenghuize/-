import axios from './index';

// 登录
export function userLogin(account, password) {
    return axios.post('/user/login', {
        account,
        password
    }).then(result=>{
        if(parseInt(result.code)===0){
            
            return result;
        }
        return Promise.reject();
    })
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