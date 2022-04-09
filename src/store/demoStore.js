// Demo.vue test용
import Vuex from 'vuex'

export const store = new Vuex.Store({ 
    state:{
        price:100,
    },
    getters:{
        originPrice(state){
            return state.price
        },
        DoublePrice(state){
            return state.price*2
        },
        triplePrice(state){
            return state.price*3
        }
    }
});