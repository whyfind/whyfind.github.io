var router = new VueRouter()
router.map({
    '/': {
        name: 'index',
        component: list
    },
    '/news/:id':{
            name: 'news',
            component: news
    },
    '/themes':{
            name: 'themes',
            component: themes
    },
    '/themes/:id':{
            name: 'theme-list',
            component: themesList
    },
    'about': {
        name: 'about',
        component: about
    }
})
router.start(App, '#entry')