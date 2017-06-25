var style = "{'background-image': 'url('+ coverImage +')'}"
var tpl = ['<article class="news-item">',
            '<div class="news-content">',
                '<div v-if="hasCoverImage" class="news-cover" :style="' + style + '">',
                    '<p class="news-title">{{news.title}}</p>',
                    '<span class="news-cover-source">{{news.image_source}}</span>',
                '</div>',
                '{{{news.body}}}',
            '</div>',
        '</article>'].join('')

var news = Vue.extend({
    template: tpl,
    data: function() {
        return {
            hasCoverImage: false,
            coverImage: defaultImg,
            news: {}
        }
    },
    created: function(){
        this.fetchNews(this.$route.params.id)
    },
    methods: {
        newsContent (body) {
        // const imgReg = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g
        //  const srcReg = /htt(p|ps):\/\/.*?(png|jpg|jpeg|gif|webp|svg)/
        //  const imgs = body.match(imgReg)
        //  imgs.forEach(img => {
        //      let imgSrc = img.match(srcReg)[0]
        //      this.$covImg(this, imgSrc, cloudSrc => {
        //          body = body.replace(imgSrc, cloudSrc)
        //      })
        //   })

            return body
        },
        loadImg: function() {
            var imgs = this.$el.getElementsByTagName('img')
            for (let img of imgs) {
                img.onerror = () => {
                    // this.$covImg(this, img.src, cloudSrc => {
                        img.src = defaultImg
                    // })
                }
            }
        },
        fetchNews: function (id) {
            var self = this
            $.ajax({
                url: 'http://zhihu.bood.in/readapi?uri=http://news-at.zhihu.com/api/4/news/' + id, 
                type: 'get',
                async:false, 
                success: function(res){
                    self.news = res
                    if (self.news.images && self.news.images.length) {
                       self.coverImage = self.news.images[0]  
                       self.hasCoverImage = true 
                    }
                    self.$nextTick(self.loadImg)
                }
            })
        }
    }
})
Vue.component('news', news)