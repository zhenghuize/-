// 二次密码加密
function md5Handle(val) {
    val = val.slice(4);
    val = val.split('').reverse().join('');
    val = val.slice(4);
    return val;
}

// 统一处理服务器返回的结果
function success(res, options) {
    res.status(200);
    res.type('application/json');
    res.send(Object.assign({
        code: 0,
        codeText: 'ok',
        data: null
    }, options));
}

// 随机生成用户的ID
function randomId() {
    let str = ''
    for (let i = 0; i < 6; i++) {
        str += Math.round(Math.random() * 9);
    }
    return str;
}

module.exports = {
    md5Handle,
    success,
    randomId
}