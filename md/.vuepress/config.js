module.exports = {
    title: 'airbnb开发规范',
    description: '收集整理的airbnd中文规范',
    serviceWorker: false,
    dest:'./docs',
    base:'/Airbnd-rules-zh/',
    themeConfig: {
        search: false,
        sidebar: [
            '../es6.md',
            '../css.md',
            '../react.md',
            '../es5.md'
            // {
            //     title: 'JavaScript ES6',
            //     children: ['../es6.md']
            // },
            // {
            //     title: 'CSS 和 Sass',
            //     collapsable: false,
            //     children: [
            //         '../css.md'
            //     ]
            // },
            // {
            //     title: 'React/JSX',
            //     children: ['../react.md']
            // },
            // {
            //     title: 'JavaScript ES5',
            //     children: ['../es5.md']
            // },
        ]
    }
}