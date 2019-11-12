let express = require('express'),
    route = express.Router();
let {
    md5Handle,
    success,
    randomId
} = require('../utils/tools');

let {
    writeFile
} = require('../utils/promiseFS')

// 登录接口
route.post('/login', (req, res) => {
    let {
        account,
        password
    } = req.body;
    password = md5Handle(password);
    let result = req.$USERDATA.find(item => {
        return (parseInt(item.id) === parseInt(account) || parseInt(item.phone) === parseInt(account) || item.email === account) && item.password == password;
    });
    if (result) {
        req.session.userid = result.id;
        success(res);
        return;
    }
    success(res, {
        code: 1,
        codeText: '账号密码不匹配'
    });
})

// 获取当前登录的信息
route.get('/userinfo', (req, res) => {
    let $USERDATA = req.$USERDATA;
    let data = $USERDATA.filter(item => {
        return item.id === req.session.userid;
    })
    delete data[0].password;
    if (!req.session.id) {
        success(res, {
            code: 1,
            codeText: '当前用户未登录'
        })
    }
    success(res, {
        data
    });
})

// 注册账号
route.post('/signup', (req, res) => {
    let {
        account,
        password
    } = req.body;
    let $USERDATA = req.$USERDATA,
        passDATA = null,
        userid = randomId();
    let flag = $USERDATA.some(item => parseInt(item.id) === parseInt(userid));
    while (flag) {
        userid = randomId();
        flag = $USERDATA.some(item => parseInt(item.id) === parseInt(userid));
    }
    passDATA = {
        id: parseInt(userid),
        name: '程序猿',
        phone: account,
        email: '',
        password: md5Handle(password),
        sex: 0,
        time: new Date().getTime(),
        state: 0,
        introduce: '一名程序员',
        icon: "http://127.0.0.1:1574/86.jpg"
    };
    $USERDATA.push(passDATA);
    writeFile('./mock/user.json', $USERDATA).then(() => {
        res.send(success(res));
    }).catch(() => {
        res.send(success(res, {
            code: 1,
            codeText: '账号注册失败'
        }));
    });
});

// 验证是否登录
route.get('/login', (req, res) => {
    let userid = req.session.userid;
    if (userid) {
        success(res);
        return;
    }
    success(res, {
        code: 1,
        codeText: '当前用户未登录'
    });
})

// 退出登录
route.get('/signout', (req, res) => {
    req.session.userid = null;
    success(res);
})

// 修改资料
route.post('/update', (req, res) => {
    req.body = req.body || {};
    let $USERDATA = req.$USERDATA,
        id = req.body.id,
        flag = false;
    delete req.body.id;
    $USERDATA = $USERDATA.map(item => {
        if (parseFloat(item.id) === parseFloat(id)) {
            flag = true;
            return {
                ...item,
                ...req.body
            };
        }
        return item;
    });
    if (!flag) {
        res.send(success(res, {
            code: 1,
            codeText: '没有当前用户'
        }));
        return;
    }
    writeFile('./mock/user.json', $USERDATA).then(() => {
        res.send(success(res));
    }).catch(() => {
        res.send(success({
            code: 1,
            codeText: '修改失败'
        }));
    });
});

// 修改密码
route.post('/resetpassword', (req, res) => {
    let $USERDATA = req.$USERDATA;
    let {
        id,
        password
    } = req.body;
    $USERDATA = $USERDATA.map(item => {
        if (parseFloat(item.id) === parseFloat(id)) {
            flag = true;
            return {
                ...item,
                password:md5Handle(password)
            };
        }
        return item;
    });
    if (!flag) {
        res.send(success(res, {
            code: 1,
            codeText: '没有当前用户'
        }));
        return;
    }
    writeFile('./mock/user.json', $USERDATA).then(() => {
        res.send(success(res));
    }).catch(() => {
        res.send(success({
            code: 1,
            codeText: '修改失败'
        }));
    });
});

module.exports = route;