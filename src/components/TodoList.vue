<template>
    <div>
        <!-- name 클래스 이름 tag 태그 이름 -->
     <transition-group name="list" tag="ul">
           <li v-for="(key,index) in this.array" :key="key" class="shadow">
               <!-- binding 값 을 객체로 하여 data인스턴스에 값을 넣지않아도 true false로 조정을 할수가 있다 -->
               <i class="checkBtn fas fa-check" :class="{checkblack:key.completed}" @click="checkbox({key,index})"></i>
               <label :class="{textcheck:key.completed}">{{key.item}}</label>
               <span  @click="removeTodo({key,index})" class="removeBtn">
                   <i class="fa fa-trash" aria-hidden="true"></i>
                   </span>
           </li>
     </transition-group>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"

export default {
    name: 'VueIntermediateTodolist',

    computed:{
        ...mapGetters(["array"])
    },
   

    mounted() {
        
    },

    methods: {
        ...mapMutations({
            // 인자값은 자동으로 넘어간다 하지만 인자값이 객체로 넘어보내려 하기때문에
            // 위에서 인자값을 객체로 선언해줘야한다
            // 아래와 동일
        removeTodo:"removeDel"
        }),
        // removeTodo(todoitem,index){
            

        //     // this.$emit('remove',todoitem.item,index);

        //           여기는 키값을 todoitem이여서 키값을 todoitem으로 해야된다
        //     // this.$store.commit('removeDel',{todoitem,index});
            
        // },
        ...mapMutations({
            checkbox:"toggleItem"
        })
        // checkbox(key,index){
        
        //     this.$store.commit('toggleItem',{key,index});
            
        // },

    },
};
</script>

<style scoped>
ul{
list-style: none;
padding: 0;
margin: 0;
text-align: left;
}
li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;    
}
.removeBtn{     
    margin-left: auto;
    color: #de4343;
}
.checkBtn{
    line-height: 45px;
    color: #62acbe;
    margin-right: 5px;
}
.checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.textcheck{
    color: #ccc;
    text-decoration: line-through;
}
.checkblack{
    color: #ccc;
}
/* 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter-from, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>