<script>
import Table from './components/Table.vue';

export default {
    computed: {
        bookList() {
            // console.log(`hello, ${this.$store.state.bookList}`);
            return;
        }
    },
    components: { Table }
}
</script>

<template>
  <Table/>
</template>

