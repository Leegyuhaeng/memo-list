<template>

<div id="app">
<TodoHeader></TodoHeader>
<TodoInput  ></TodoInput>
<TodoList  ></TodoList>
<TodoFooter ></TodoFooter>
</div>

</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/Todoinput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/Todofooter.vue'
// TodoHeader
// TodoInput
// TodoList
// TodoFooter


export default {

    data() {
        return {
           
        };
    },
 created(){
        // console.log(localStorage)
        // JSON.parse 해당 문자열로 받은 객체를 다시 객체로 바꿔줌
        // if(localStorage.length>0){
        //     let i = 0
        //     while(i<localStorage.length){
        //         // localStorage.key 키를가져옴 (index를통해 가져올수있음)
        //         // localStorage.getItem()해당 키의 value를 가져옴 (해당 키값의 이름)
        //         // console.log(localStorage.key(i))
        //       //  console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))) 
        //         // this.todoitems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) //  이런식으로 바로 파서를 할수도있고
        //         this.todoitems.push(this.parse(localStorage.getItem(localStorage.key(i))))      //이런식으로 메소드로 보내서 파서를 할수도있다  결과는 똑같다
        //         this.todoitems.sort()
        //         i++
        //     }
        // }
       
    },
    methods:{
        // parse(data){
        //   return  JSON.parse(data)
        // },
        // addOneclick(data){
        //   // 할일 추가 하는 emit
        //   console.log(data)
        //     const obj = {completed:false,item:data}
        //     localStorage.setItem(data,JSON.stringify(obj))
        //     this.todoitems.push(obj) 
        // },
        // removeDel(item,index){
        //   console.log(item)
        //   console.log(index)
        //   localStorage.removeItem(item)
        //     this.todoitems.splice(index,1)
        // },
        // toggleItem(key,index){
        // //  console.log(key)

        // this.todoitems[index].completed=!this.todoitems[index].completed
        //   localStorage.removeItem(key.item)
        //     localStorage.setItem(key.item,JSON.stringify(key))
        // },
        // clearAll(){
        //   // console.log("fds")
        //   localStorage.clear()
        //   this.todoitems=[]
        // }
    },
    components:{
  TodoHeader,
  TodoInput,
  TodoList,
  TodoFooter
},

}
</script>

<style>
body{
  text-align: center;
  background-color:#F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
