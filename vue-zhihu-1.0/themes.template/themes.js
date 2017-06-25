var link = "{'name': 'theme-list', 'params': {'id': card.id}}"
var tpl = ['<div class="list-container">',
        '<cov-card :data="card" v-link="'+ link +'" v-for="card in themes"></cov-card>',
    '</div>'].join('')

var themes = Vue.extend({
    template: tpl,
    created: function(){
        this.fetchList()
    },
    methods: {
        fetchList: function(){
            var self = this
            $.ajax({
                url: 'http://zhihu.bood.in/readapi?uri=http://news-at.zhihu.com/api/4/themes', 
                type: 'get',
                async:false, 
                success: function(res){
                    var data = res
                    var arr = []
                    data.others.forEach(function(theme){
                        arr.push({
                            description: theme.description,
                            name: theme.name,
                            img: theme.thumbnail,
                            id: theme.id,
                            color: theme.color
                        })
                    }) 

                    self.themes = arr
                }
            })
        } 
    }
})
// 注册
Vue.component('themes', themes)