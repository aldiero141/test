<template>
    <div class="container">
        <v-dialog
            v-model="show"
            width="500"
        >
            <Card>
                <slot/>
            </Card>    
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'ModalComponent',
        props: {
            value: Boolean
        },
        computed: {
            show: {
                get () {
                    return this.value
                },
                set (value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>

<style scoped>
.container{
    position: absolute;
    top: 4em;
    width: 100vw;
    height: 40vh;
}
</style>