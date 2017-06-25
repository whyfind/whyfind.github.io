var tpl = ['<section class="zhi-list">',
            '<div class="list-date">{{date}}</div>',
            '<cov-article v-for="data in articles" :data="data"></cov-article>',
        '</section>'].join('')

Vue.component("cov-articles",{
    template: tpl,
    props: {
        'articles': {
            type: Array,
            required: true
        },
        date: {
            type: String,
            default () {
                return ''
            }
        }
    }
})