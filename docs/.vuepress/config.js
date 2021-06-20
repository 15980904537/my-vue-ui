module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home'},
            { text: 'Guide' },
            { text: 'External'},
        ],
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