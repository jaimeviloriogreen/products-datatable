import { reactive } from "vue";

export const store = reactive({
    toHide:true,
    toShowTable:false,
    products:[],
    cancelForm(){
        this.toHide = true;
    } 

});