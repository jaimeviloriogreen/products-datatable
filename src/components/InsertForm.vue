<template>
   <section class="section-form" :class="{ showSectionForm: toHide }">
        <form class="form" @submit.prevent="productsInsert">
            <input v-model="name" class="form__input" type="text" placeholder="Name" ref="name">
            <input v-model.number="price" class="form__input" type="text" placeholder="Price">
            <input v-model.number="qty" class="form__input" type="text" placeholder="Qty">
           <div class="form__buttons">
               <button @click="store.cancelForm()" class="form__btn" type="button">Cancel</button>
               <button class="form__btn" type="submit">Insert</button>
           </div>
        </form>
   </section>
</template>

<script>
    import { store } from "./store.js";
    import { nextTick } from "vue";
    
    export default{
        name:"Main Form",
        data(){
            return{
                store, 
                name:null, 
                price:null, 
                qty:null
            }
        },
        methods:{
            productsInsert(){
                
                store.products.push({
                    name:this.name,
                    price:this.formatCurrency().format(this.price), 
                    qty:this.qty
                });

                if(store.products.length > 0) store.toShowTable = true;

                this.name = null;
                this.price = null;
                this.qty = null;
                this.$refs.name.focus();
            },
            inputFocus(){
                this.$refs.name.focus();
            },
            formatCurrency(){
                const f = new Intl.NumberFormat(["es-DO"], {
                    style:"currency", 
                    currency:"DOP",
                    currencyDisplay:"symbol",
                    maximumFractionDigits:2
                });

                return f;
            }
        },

        computed:{
            toHide(){
                return store.toHide
            }
        }, 
        watch:{
            async toHide(value, oldValue){
                if(!value){
                    await nextTick(() => this.inputFocus());
                }
            }
        }
    }
</script>
<style lang="css" scoped>
    .section-form{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        display: grid;
        place-content: center;
    }

    .form{
        width: 20rem;
        height: 15rem;
        background-color: #fff;
        display: flex;
        flex-flow: column nowrap;
        padding: 1rem;
        border-radius: .25rem;
        gap: .5rem;
    }
    .form__input{
        font-size: 1.125rem;
        padding: .5rem 1rem;
    }
    .form__buttons{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .form__btn{
        font-size: 1.125rem;
        padding: .5rem 1rem;
        cursor: pointer;
    }

    .showSectionForm{
        display: none;
    }

</style>