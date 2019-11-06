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
        code: 1,
        codeText: '没有数据'
    })
})

//  获取游戏详细信息
route.get('/info', (req, res) => {
    console.log(req,res)
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
        code:1,
        codeText:'没有找到'
    })
})

// 获取评论信息
route.get('/comment',(req,res)=>{
    let $COMMENT = req.$COMMENT;
    let data = $COMMENT.filter(item => {
        return item.id === parseInt(req.query.id);
    })
    if (data) {
        success(res, {
            data
        })
        return;
    }
    success(res, {
        code:1,
        codeText:'没有找到'
    })
})

// 每日新发现
route.get('/discovery',(req,res)=>{
    let $DISCOVERY = req.$DISCOVERY;
    if($DISCOVERY){
        success(res,{
            data:$DISCOVERY
        })
        return;
    }
    success(res, {
        code:1,
        codeText:'没有找到'
    })
})

// 新游预约
route.get('/order',(req,res)=>{
    let $ORDER = req.$ORDER;
    if($ORDER){
        success(res,{
            data:$ORDER
        });
    }
    success(res, {
        code:1,
        codeText:'没有找到'
    });
})

// 推荐玩家
route.get('/player',(req,res)=>{
    let data = req.$PLAYER;
    if(data){
        success(res,{
            data
        })
        return;
    }
     success(res, {
        code:1,
        codeText:'没有找到'
    });
})

// 游戏排行列表
module.exports = route;