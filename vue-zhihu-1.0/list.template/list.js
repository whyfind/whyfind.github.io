var tpl = ['<div class="list-container">',
            '<cov-articles :articles="articles" :date="date"></cov-articles>',
        '</div>',
        '<button class="more-btn" @click="dataPointerCalc(true)">更多</button>'].join('')

var list = Vue.extend({
    template: tpl,
    created: function(){
        this.dataPointerCalc()
    },
    methods: {
        dataPointerCalc: function(){
            this.fetchList()
        },
        fetchList: function(){
            var self = this
            $.ajax({
                url: 'http://zhihu.bood.in/readapi?uri=http://news.at.zhihu.com/api/4/news/before/20170623', 
                type: 'get',
                async:false, 
                success: function(res){
                    var data = res
                    var arr = []
                    data.stories.forEach(function(article){
                        arr.push({
                            type: 'news',
                            title: article.title,
                            img: article.images[0],
                            id: article.id
                        })
                    }) 

                    self.articles = arr
                    self.date = new Date().toDateString()
                }
            })
        } 
    }
})
// 注册
Vue.component('list', list)