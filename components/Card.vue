<template>
    <v-card
        elevation="2"
        class="card rounded-lg my-4 "
    >
    <slot/>
    </v-card>    
</template>
<script>
export default {
    name: 'CardComponent',

}
</script>
<style scoped>
.card{
    padding: 2em 2.5em;
    width: 100%;
}
</style>