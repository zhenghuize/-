let express = require('express'),
    route = express.Router();
const {
    success
} = require('../utils/tools');
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
        code:1,
        codeText:'没有数据'
    })
})

module.exports = route;