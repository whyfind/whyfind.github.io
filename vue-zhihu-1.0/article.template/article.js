var link = "{'name': 'news', params: {id: data.id}}"
var style = "{'background-image': 'url('+ cloudSrc +')'}"

var tpl = ['<article class="list-item" v-link="' + link + '" >',
            '<div class="item-preview" :style="' + style + '"></div>',
            '<p class="item-title">{{data.title}}</p>',
        '</article>'].join('')

Vue.component("cov-article", {
    template: tpl,
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data: function(){
        return {
            cloudSrc: defaultImg
        }
    },
    created: function() {
        this.cloudSrc = this.data.img
    }
})