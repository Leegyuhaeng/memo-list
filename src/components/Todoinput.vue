<template>
    <div class="inputBox shadow">
        <input type="text" v-model="inputval1" @keydown.enter="addTodo">

        <span class="addContainer" @click="addTodo" >
        <i class="fas fa-plus addBtn"  ></i>
        </span>

          <Modal v-if="showModal" @close="showModal = false">

            <!-- <h3 slot="header">경고</h3> vue2@ 버전-->

            <!-- <template v-slot:header>경고</template> 그이상버전은 이둘중에 하나-->
            <template  v-slot:header >
               경고!
                <i  class="fas fa-times closeModal"  @click="showModal=false"></i>
                </template>
            <template #body>값을 입력하세요</template>
         
          </Modal>
    </div>
</template>

<script>
import Modal from "./common/Modal.vue"

export default {
    name: 'VueIntermediateTodoinput',

    data() {
        return {
            inputval1:'',
            showModal:false
        };
    },

    mounted() {
        
    },

    methods: {
        addTodo(){
            // JSON.stringify 객체를 문자열로 바꿔줌 
            // 이걸 사용하지 않고 인자값에 넣을경우 문자로 인식이 안됨
            if(this.inputval1!==""){
            // this.$emit('todopush', this.inputval1);
            this.$store.commit('addOneclick', this.inputval1);
          
            // console.log(obj)
            // console.log(this.inputval1)
            this.clearinput()
            }else{this.showModal=!this.showModal}
        },
        clearinput(){
            this.inputval1='';
        }
    },
    components:{
        Modal
    }
};
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
    width: 90%;
    height: 40px;
}
.addContainer{
    float: right;
    background: linear-gradient(to right,#6478FB,#8763FB);
    display: block;
    width: 3rem;
    height: 100%;
    border-radius: 5px;
}
.addBtn{
    color:white;
}
.closeModal{
    font-size: 20px;
    color: greenyellow;
}
</style>