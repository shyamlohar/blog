module.exports = {
    title: 'UwU',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'home', link: '/' },
            { text: 'html', link: '/html/' },
            { text: 'css', link: '/css/' },
            { text: 'about', link: '/about/' },
            // { text: 'blog', link: '/blog/' }
        ],
        sidebar: {
            "/html/": [
                'getstarted.md',
                'firstlecture.md'
            ]
        }
    }
}