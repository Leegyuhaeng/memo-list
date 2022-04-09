// 이모듈을 객체 에다 뿌리기 때문에 화살표함수를 써야한다
// 화살표함수 동기화? 로 알고있다
const addOneclick=(state,val)=>{
    // 할일 추가 하는 emit
      const obj = {completed:false,item:val}
      localStorage.setItem(val,JSON.stringify(obj))
      state.todolist.push(obj) 
    //  this._mutations.a[0]()
    // this.getters.get("안녕하세요")
     
  }
  const removeDel=(state,obj)=>{
    //   console.log(obj.key.item)
    //   console.log("fd")
    localStorage.removeItem(obj.key.item)
      state.todolist.splice(obj.index,1)
  }

  const toggleItem=(state,obj)=>{
 
    //   console.log(obj.key.completed)
  state.todolist[obj.index].completed=!state.todolist[obj.index].completed
    localStorage.removeItem(obj.key.item)
      localStorage.setItem(obj.key.item,JSON.stringify(obj.key))
  }
 const  clearAll=(state)=>{
   console.log()
    localStorage.clear()
    state.todolist=[]
  }
  export {addOneclick,removeDel,toggleItem,clearAll}