var link = "{'name': 'news', 'params': {'id': data.id}}"
var color = "{'no-img': noImg}"
var style = "{'background-image': 'url('+ cloudSrc +')'}"

var tpl = [' <article class="card-item" v-link="' + link + '" :class="' + color + '">',
        '<div class="card-preview" :style="' + style + '"></div>',
        '<p class="card-title">{{data.name}}</p>',
        '<p class="card-description">{{data.description}}</p>',
    '</article>'].join('')

var card = Vue.extend({
    template: tpl,
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data: function (){
        return {
            noImg: true,
            cloudSrc: defaultImg
        }
    },
    created: function() {
        if (this.data.img) {
            this.cloudSrc = this.data.img
            this.noImg = false
        }
    }
})
// 注册
Vue.component('cov-card', card)