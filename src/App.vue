<template>
    <InsertButton/>
    <InsertForm/>
    <DataTable/>
</template>
<script>
    import InsertButton from './components/InsertButton.vue';
    import InsertForm from './components/InsertForm.vue';
    import DataTable from './components/DataTable.vue';
    export default{
        components:{
            InsertButton, 
            InsertForm, 
            DataTable
        }
    }
</script>