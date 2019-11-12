let express = require('express'),
    route = express.Router();
const {
    success
} = require('../utils/tools');
const {
    writeFile
} = require('../utils/promiseFS')

// 获取游戏信息
route.get('/list', (req, res) => {
    let data = req.$GAMELIST;
    if (data) {
        success(res, {
            data
        });
        return;
    }
    success(res, {
        code: 1,
        codeText: '没有数据'
    })
})

// 获取游戏详细信息
route.get('/info', (req, res) => {
    let $GAMEINFO = req.$GAMEINFO;
    let data = $GAMEINFO.filter(item => {
        return item.id === parseInt(req.query.id);
    })
    if (data) {
        success(res, {
            data
        })
        return;
    }
    success(res, {
        code: 1,
        codeText: '没有找到'
    })
})

// 获取评论信息
route.get('/comment', (req, res) => {
    let $COMMENT = req.$COMMENT;
    let data = $COMMENT.filter(item => {
        return parseInt(item.id) === parseInt(req.query.id);
    })
    if (data) {
        success(res, {
            data
        })
        return;
    }
    success(res, {
        code: 1,
        codeText: '没有找到'
    })
})

// 添加评论信息
route.post('/addcomment', (req, res) => {
    let $COMMENT = req.$COMMENT,
        passDATA = null;
    passDATA = {
        ...req.body,
        icon: "http://127.0.0.1:1574/86.jpg",
        key: $COMMENT.length + 1
    };
    $COMMENT.unshift(passDATA);
    writeFile('./mock/comment.json', $COMMENT).then(() => {
        res.send(success(res));
    }).catch(() => {
        res.send(success(res, {
            code: 1,
            codeText: '评论添加失败'
        }));
    });
});

// 安利墙
route.get('/wall', (req, res) => {
    let data = req.$WALL;
    if (data) {
        success(res, {
            data
        })
        return;
    }
    success(res, {
        code: 1,
        codeText: '没有数据'
    })
})

// 每日新发现
route.get('/discovery', (req, res) => {
    let $DISCOVERY = req.$DISCOVERY;
    if ($DISCOVERY) {
        success(res, {
            data: $DISCOVERY
        })
        return;
    }
    success(res, {
        code: 1,
        codeText: '没有找到'
    })
})

// 新游预约
route.get('/order', (req, res) => {
    let $ORDER = req.$ORDER;
    if ($ORDER) {
        success(res, {
            data: $ORDER
        });
        return;
    }
    success(res, {
        code: 1,
        codeText: '没有找到'
    });
})

// 推荐玩家
route.get('/player', (req, res) => {
    let data = req.$PLAYER;
    if (data) {
        success(res, {
            data
        })
        return;
    }
    success(res, {
        code: 1,
        codeText: '没有找到'
    });
})

// 搜索用户
route.post('/searchuser', (req, res) => {
    let search = req.body.search,
        $USERDATA = req.$USERDATA;
    if (search) {
        let data = [];
        $USERDATA.forEach(item => {
            let userflag = parseInt(item.id) === parseInt(search) || parseInt(item.phone) === parseInt(search) || item.name.includes(search);
            userflag ? data.push(item) : null;
        })
        success(res, {
            data
        });
        return;
    }
    success(res, {
        code: 1,
        codeText: '当前游戏或用户不存在'
    })
});

// 搜索游戏
route.post('/searchgame', (req, res) => {
    let search = req.body.search,
        $GAMELIST = req.$GAMELIST;
    if (search) {
        let data = [];
        $GAMELIST.forEach(item => {
            item.name.includes(search) ? data.push(item) : null;
        })
        success(res, {
            data
        });
        return;
    }
    success(res, {
        code: 1,
        codeText: '当前用户不存在'
    })
});

// 添加到心愿单
route.post('/addwishlist', (req, res) => {
    let $WISHLIST = req.$WISHLIST,
        $GAMELIST = req.$GAMELIST,
        passDATA = null;
    $GAMELIST.forEach(item => {
        parseInt(item.id) === parseInt(req.body.id) ? passDATA = item : null;
    })
    passDATA.userid = req.body.userid;
    $WISHLIST.unshift(passDATA);
    writeFile('./mock/wishlist.json', $WISHLIST).then(() => {
        res.send(success(res));
    }).catch(() => {
        res.send(success(res, {
            code: 1,
            codeText: '添加失败'
        }));
    });
});

// 添加到仓库
route.post('/addwarehouse', (req, res) => {
    let $WAREHOUSE = req.$WAREHOUSE,
        $GAMELIST = req.$GAMELIST,
        passDATA = null;
    $GAMELIST.forEach(item => {
        parseInt(item.id) === parseInt(req.body.id) ? passDATA = item : null;
    })
    passDATA.userid = req.body.userid;
    $WAREHOUSE.unshift(passDATA);
    writeFile('./mock/warehouse.json', $WAREHOUSE).then(() => {
        res.send(success(res));
    }).catch(() => {
        res.send(success(res, {
            code: 1,
            codeText: '添加失败'
        }));
    });
});

// 获取心愿单数据
route.get('/wishlist', (req, res) => {
    let $WISHLIST = req.$WISHLIST,
        userid = req.query.userid,
        data = [];
    if (!userid) {
        success(res, {
            code: 1,
            codeText: '没有传userid'
        })
        return;
    }
    $WISHLIST.forEach(item => {
        parseInt(item.userid) === parseInt(userid) ? data.push(item) : null;
    });
    success(res, {
        data
    });
})

// 获取仓库的数据
route.get('/warehouse', (req, res) => {
    let $WAREHOUSE = req.$WAREHOUSE,
        userid = req.query.userid,
        data = [];
    if (!userid) {
        success(res, {
            code: 1,
            codeText: '没有传userid'
        })
        return;
    }
    $WAREHOUSE.forEach(item => {
        parseInt(item.userid) === parseInt(userid) ? data.push(item) : null;
    });
    success(res, {
        data
    });
})

module.exports = route;