import Vuex from 'vuex'
// import *as getters from "./getters"
// import *as mutations from "./mutations"
import todoApp from "./modules/todoApp"



// 앱이 거대해지면 이런식으로 모듈화를 더쪼개서 임포트한다  적당한규모면 아랫방식처럼하면된다 

// 여기는 modules 라는 객체 안에 모듈화된 컴포넌트를 넣으면된다
export const store = new Vuex.Store({ 
    modules:{
        todoApp
    }
})



// const storage = {
//     fetch(){
        
//         const arr = []
//         if(localStorage.length>0){
//             let i = 0
//             while(i<localStorage.length){
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))  
//                 arr.sort()
//                 i++
//             }
//         }
//         return arr;
//     }
// }




// export const store = new Vuex.Store({ 
//     state:{
//         headerText:"Tood It!!!!!",
//         todolist: storage.fetch()
//     },
//     // 이름이 같으면 축약가능
//     // getters:getters,
//     // mutations:mutations
//     getters,
//     mutations










    // getters:{
        // parse(){   test
        // return (data)=>{
        //  return JSON.parse(data)
        // }
        //  JSON 데이터 파서할게 많을 때 여기에 넣어서 사용하면된다

        //   
        // },
       
        // get(){   test
        //    return (data)=>{
        //        return console.log(data)
        //    }
        // }


        // headerText(state){
        //     return state.headerText
        // },
        // array(state){
        //     return state.todolist
        // }
        
    // },
    // mutations:{
    //     addOneclick(state,val){
    //         // 할일 추가 하는 emit
    //           const obj = {completed:false,item:val}
    //           localStorage.setItem(val,JSON.stringify(obj))
    //           state.todolist.push(obj) 
    //         //  this._mutations.a[0]()
    //         // this.getters.get("안녕하세요")
             
    //       },
    //       removeDel(state,obj){
    //         //   console.log(obj.key.item)
    //         //   console.log("fd")
    //         localStorage.removeItem(obj.key.item)
    //           state.todolist.splice(obj.index,1)
    //       },
    //       toggleItem(state,obj){
         
    //         //   console.log(obj.key.completed)
    //       state.todolist[obj.index].completed=!state.todolist[obj.index].completed
    //         localStorage.removeItem(obj.key.item)
    //           localStorage.setItem(obj.key.item,JSON.stringify(obj.key))
    //       },
    //       clearAll(state){
    //        console.log()
    //         localStorage.clear()
    //         state.todolist=[]
    //       },
        //   a(){
        //       console.log("Fdsfsdfdfdsfdsfsdf안녕")
        //   }
    // }
// });

//둘다 작동이됨(선택)

// import { createStore } from 'vuex'

//  export const store = createStore ({ 
//     state: {headerText:"Tood It!!!"},
//     getters: { },
//     mutations: { },
//     actions: { },
//      });


