<template>
    <button @click="showForm" class="btn">Insert</button>
</template>
<script>
    import { store } from "./store.js";
    
    export default{
        name:"Insert Button",
        data(){
            return{
                store
            }
        },
        methods:{
            showForm(){
                store.toHide = false;
            }
        }
    }
</script>
<style lang="css" scoped>
    .btn{
        width: 8rem;
        font-size: 1.125rem;
        padding: .75rem 1rem;
        cursor: pointer;
        border: none;
        background-color: var(--color14);
        border-radius: .25rem;
        color: var(--color1);
        letter-spacing: 1px;
        font-weight: 550;
        text-transform: uppercase;

    }
</style>