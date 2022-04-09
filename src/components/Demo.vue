<!--demoStore.js 테스트용-->
<template>
    <div>
        <!-- 귀찮은 작업 직접 선언하여 들고온다 import 필요없음 하지만 추적하기 빡셈  방법1-->
        <!-- <p>{{this.$store.getters.originPrice}}</p>
        <p>{{this.$store.getters.DoublePrice}}</p>
        <p>{{this.$store.getters.triplePrice}}</p> -->

<!-- 이런방식으로 computed 에서 간단한 맵핑후 들고 처리할수있다 이것은 귀찮다 방법2-->
        <!-- <p>{{origin}}</p>
        <p>{{Double}}</p>
        <p>{{triple}}</p> -->

<!-- 이런식으로 임포트한후 helper getter로 이용해서 간단하게 구현가능 방법3 -->
        <p>{{originPrice}}</p>
        <p>{{DoublePrice}}</p>
        <p>{{triplePrice}}</p>

    </div>
</template>

<script>
// 방법3
import{mapGetters}from"vuex"
export default {
    name: 'VueIntermediateDemo',

    data() {
        return {
            
        };
    },
    // 방법3
    computed:{
        ...mapGetters(['originPrice','DoublePrice','triplePrice'])
    },
    // computed:{ 방법 2
    //     origin(){
    //         return this.$store.getters.originPrice
    //     },
    //     Double(){
    //         return this.$store.getters.DoublePrice
    //     },
    //     triple(){
    //         return this.$store.getters.triplePrice
    //     }
    // },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>