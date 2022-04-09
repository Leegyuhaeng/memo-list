<template>
    <div class="clearAll">
        <span class="clearbtn" @click="removeAll">Clear All</span>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    name: 'VueIntermediateTodofooter',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        ...mapMutations({
            removeAll:"clearAll"
        })
        // removeAll(){
        //     // this.$emit('clear');  app.vue
        //     this.$store.commit("clearAll") vuex store.js
        // }
    },
};
</script>

<style scoped>
.clearAll{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 10px;
}
.clearbtn{
    color: red;
    display: block;
}
</style>