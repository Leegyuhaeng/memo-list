<template>
   <header>
       <!-- <h1>TOOD it!</h1> -->
       <h1>{{this.headerText}}</h1>
   </header>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name: 'VueIntermediateTodoheader',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    created(){
        console.log("fdsds")
    },
    computed:{
        //3 개다 사용가능 위에서 {{this.$store.getters.headerText}}
        // 안하는 이유는 코드를 찾기 편리함 

        // headerText(){
        //     return this.$store.getters.headerText
        // }


        ...mapGetters(["headerText"])


        // ...mapGetters({  이런식으로 사용하게 되면 {{this.header}}을 하여야한다
        //     header:"headerText"
        //     })
    }
};
</script>

<style scoped>
h1{
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
    
}
</style>