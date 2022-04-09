// 이모듈을 객체 에다 뿌리기 때문에 화살표함수를 써야한다
// 화살표함수 동기화? 로 알고있다
const headerText=(state)=>{
    return state.headerText
}
const array=(state)=>{
    return state.todolist
}

export {headerText,array}