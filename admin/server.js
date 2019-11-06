let express = require('express'),
    bodyParser = require('body-parser');
// 创建web服务，监听端口号
let app = express(),
    PORT = 1574;

function listen(PORT) {
    try {
        app.listen(PORT, () => {
            console.log(`Service created successfully! Listening for port ${PORT}`);
        });
    } catch (err) {
        PORT++;
        listen(PORT)
    }
};
listen(PORT);
let session = require('express-session');
app.use(session({
    secret: 'FOUR',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}));
// 解决跨域
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With');
    res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS,HEAD');
    req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});

// 数据接口API的请求处理
// 把POST请求基于请求主体传递的信息获取到，放到REQ body上
app.use(bodyParser.urlencoded({
    extended: true
}));

// 向req添加数据
const {
    readFile
} = require('./utils/promiseFS');

app.use(async (req, res, next) => {
    req.$USERDATA = JSON.parse(await readFile('./mock/user.json'));
    req.$GAMELIST = JSON.parse(await readFile('./mock/gamelist.json'));
    req.$GAMEINFO = JSON.parse(await readFile('./mock/gameinfo.json'));
    req.$COMMENT = JSON.parse(await readFile('./mock/comment.json'));
    req.$DISCOVERY = JSON.parse(await readFile('./mock/discovery.json'));
    req.$ORDER = JSON.parse(await readFile('./mock/order.json'));
    req.$PLAYER = JSON.parse(await readFile('./mock/player.json'));
    req.$WALL = JSON.parse(await readFile('./mock/wall.json'));
    next();
})

// 构建express路由
app.use('/user', require('./routes/user'));
app.use('/game', require('./routes/game'));
app.use((req, res) => {
    res.status(404);
    res.send('NOT FOUND!');
});