var tpl = ['<section class="card-list">',
        '<cov-card :data="data" v-for="data in list"></cov-card>',
    '</section>'].join('')

var themesList = Vue.extend({
    template: tpl,
    data: function(){
            return {
                list: []
            }
    },
    created: function(){
        this.fetchList(this.$route.params.id)
    },
    methods: {
        dataPointerCalc: function(){
            this.fetchList()
        },
        fetchList: function(id){
            var self = this
            $.ajax({
                url: 'http://zhihu.bood.in/readapi?uri=http://news-at.zhihu.com/api/4/theme/' + id, 
                type: 'get',
                async:false, 
                success: function(res){
                    var data = res
                    var arr = []
                    data.stories.forEach(function(story){
                        arr.push({
                            name: story.title,
                            img: story.images ? story.images[0] : '',
                            id: story.id
                        })
                    }) 

                    self.list = arr
                }
            })
        } 
    }
})
// 注册
Vue.component('themes-list', themesList)