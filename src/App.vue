<script>
import Table2 from './components/Table2.vue';

export default {
    mounted(){
        console.log("mounted : ", new Date().toLocaleTimeString());
    },
    created(){
        console.log("created : ", new Date().toLocaleTimeString());
    },
    computed: {
        bookList() {
            // console.log(`hello, ${this.$store.state.bookList}`);
            return;
        },
    },
    components: { Table2 }
}
</script>

<template>
  <Table2/>
</template>

