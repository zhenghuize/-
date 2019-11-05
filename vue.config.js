module.exports = {
    //=>基于PAGES配置多页面效果
    pages: {
        allpage: {
            entry: 'src/allpage.js',
            template: 'public/allpage.html'
        },
        index: {
            entry: 'src/main.js',
            template: 'public/index.html'
        }
    }
};