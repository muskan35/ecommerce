import router from '@system.router';
export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    toProduct: function(){
        router.push({
            uri: "pages/product/product"
        })
    },
    toFilter: function(){
        router.push({
            uri: "pages/filter/filter"
        })
    }
}
