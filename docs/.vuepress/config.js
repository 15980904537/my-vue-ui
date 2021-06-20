module.exports = {
    title: 'Hello VuePress',
    base:'/frank-test-1/',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: ['/install/',
                    '/get-start/',]
            },
            {
                title: '组件',   // 必要的
                children: [
                    '/components/button'
                ]
            },
        ]
    }
}