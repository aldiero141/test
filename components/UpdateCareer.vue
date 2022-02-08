<template>
    <Modal v-model="show">
        <h1 style="text-align: center">Update Career</h1>
             <v-form
                ref="form"
                lazy-validation
                @submit.prevent="submit()"
            >
                <v-text-field
                    v-model="form.position"
                    label="Position"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.company"
                    label="Company"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.starting_from"
                    label="Starting From"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.ending_in"
                    label="Ending In"
                    
                    ></v-text-field>
                

                <!-- <v-text-field
                    v-model="form.bio"
                    label="bio"
                    :error-messages="passwordErrorMessage"
                    @blur="$v.form.password.$touch()"
                    ></v-text-field> -->

                <v-btn 
                    block 
                    color="green" 
                    class="mt-8"
                >Update</v-btn>
            </v-form>
    </Modal>
</template>

<script>
    import {
        required,
    // helpers,
    // minLength,
    // maxLength,
    } from "vuelidate/lib/validators";

    export default {
        name: 'UpdateCareerComponent',
        props: {
            value: Boolean
        },
        data(){
            return{
                    form:{
                        position:'',
                        company:'',
                        starting_from:'',
                        ending_in:'',
                    },
            }
        },
        validations:{
            form:{
                    position:{ 
                        required, 
                    },
                    company:{ 
                        required, 
                    },
                    starting_from:{ 
                        required, 
                    },
                    ending_in:{ 
                        required, 
                    },
            }
        },
        computed:{
                show: {
                    get () {
                        return this.value
                    },
                    set (value) {
                        this.$emit('input', value)
                    }
                }
        },
        methods:{
            submit(){

            }
        }
    }
</script>

<style >

</style>