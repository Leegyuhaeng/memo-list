const storage = {
    fetch(){
        
        const arr = []
        if(localStorage.length>0){
            let i = 0
            while(i<localStorage.length){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))  
                arr.sort()
                i++
            }
        }
        return arr;
    }
}
// 이모듈은 이미 객체를 뿌리기때문에 객체 안에있는 함수에 화살표함수를 쓰면 안된다
const state = {
            headerText:"Tood It!!!!!",
            todolist: storage.fetch()
        }
const getters = {
     headerText(state){
        return state.headerText
    },
    array(state){
        return state.todolist
    }
}
const mutations = {
     addOneclick(state,val){
        // 할일 추가 하는 emit
          const obj = {completed:false,item:val}
          localStorage.setItem(val,JSON.stringify(obj))
          state.todolist.push(obj) 
        //  this._mutations.a[0]()
        // this.getters.get("안녕하세요")
         
      },
      removeDel(state,obj){
        //   console.log(obj.key.item)
        //   console.log("fd")
        localStorage.removeItem(obj.key.item)
          state.todolist.splice(obj.index,1)
      },
    
      toggleItem(state,obj){
     
        //   console.log(obj.key.completed)
      state.todolist[obj.index].completed=!state.todolist[obj.index].completed
        localStorage.removeItem(obj.key.item)
          localStorage.setItem(obj.key.item,JSON.stringify(obj.key))
      },
      clearAll(state){
       console.log()
        localStorage.clear()
        state.todolist=[]
      }
}
export default{
    state,
    getters,
    mutations,
}