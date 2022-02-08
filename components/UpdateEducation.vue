<template>
    <Modal v-model="show">
        <h1 style="text-align: center">Update Education</h1>
             <v-form
                ref="form"
                lazy-validation
                @submit.prevent="submit()"
            >
                <v-text-field
                    v-model="form.school_name"
                    label="School Name"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.graduation_time"
                    label="Graduation Time"
                    
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
        name: 'UpdateEducationComponent',
        props: {
            value: Boolean
        },
        data(){
            return{
                    form:{
                        school_name:'',
                        graduation_time:'',
                       
                    },
            }
        },
        validations:{
            form:{
                    school_name:{ 
                        required, 
                    },
                    graduation_time:{ 
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