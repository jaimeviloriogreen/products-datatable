<template>
    <section class="data-table">
        <table class="table" v-if="store.toShowTable">
            <thead class="table__thead">
                <tr class="table__thead-row">
                    <th class="table__theading">Name</th>
                    <th class="table__theading">Price</th>
                    <th class="table__theading">Qty</th>
                    <th class="table__theading">Action</th>
                </tr>
            </thead>
            <tbody class="table__tbody">
                <tr class="table__tbody-row" v-for="{name, price, qty} in store.products">
                    <td class="table__tdata">{{ name }}</td>
                    <td class="table__tdata">{{ price }}</td>
                    <td class="table__tdata">{{ qty }}</td>
                    <td class="table__tdata  table__data--btn">
                       <a class="table__btn table__btn--delete">
                            <img src="/icons/delete.svg" alt="delete">
                        </a>
                        <a class="table__btn table__btn--edit">
                            <img src="/icons/edit.svg" alt="edit">
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
    import { store } from "./store.js";
    export default{
        data(){
            return{
                store
            }
        }
    }
</script>
<style lang="css" scoped>
    /* Table */
.data-table{
    margin-top: 2rem;
    overflow-x: scroll;
}
.table{
    width: 100%;
    height: 100%;
    border-collapse: collapse;
}
.table__theading{
    background-color: rgba(5, 15, 32, 0.678);
    padding: .75rem;
    font-size: 1rem;
    font-family: var(--fuente1); 
    color: var(--color1);
    text-align: center;
}
.table__tdata{
    padding: .5rem;
    text-align: center;
}
.table__thead-row{border-bottom: 1px solid rgba(97, 97, 97, 0.431)}
.table__tbody-row:nth-child(even){
    background-color: #1a5b753b;
}
.table__data--btn{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
}
.table__btn{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: .25rem;
    padding: .25rem .5rem;
    flex-flow: column nowrap;
    cursor: pointer;
}
.table__btn--delete{background-color: var(--color10);}
.table__btn--edit{background-color: var(--color5);}

</style>