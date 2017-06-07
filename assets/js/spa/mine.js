Vue.component('mine', {
    name: 'mine',
    template: getMineTemplate(),
    data(){
        return{
            userInfo: '',
            userGoods:''
        }
    },
    mounted(){
        let url = `/api/user/${this.$root.userInfo._id}`;
        utils.DataService.get(url).done(res=>{
            this.userInfo = res
        })
        let goodsUrl = `/api/user/goods/${this.$root.userInfo._id}`
        utils.DataService.get(goodsUrl).done(res=>{
            if(res.length > 0){
                this.userGoods = res
            }else{
                this.userGoods ='';
            }
        })
    },
    methods: {
        changeCurrentView(name){
            this.$emit('event','changeCurrentView',name)
        },
        CheckTheDetails(goodID){
            this.$emit('event','changeGoodsId',goodID)
            this.$emit('event','changeCurrentView','goods-details')
        }
    }
})