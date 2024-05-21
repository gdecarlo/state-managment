import { defineStore } from "pinia";
import {ref,computed} from 'vue'

export const useCounterStore = defineStore('counterStore',()=>{

    //state
    const _count = ref(0) 

    //getter
    const count = computed(()=> _count.value)
    const doubleCount = computed(()=> _count.value * 3)

    //action
    function increment (){
        _count.value++
    }

    // llega un objeto, lo guardo
    const hayUsuarioAutenticado = computed(()=> _user.value != null)


    return {count,increment,doubleCount}
})