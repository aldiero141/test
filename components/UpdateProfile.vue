<template>
    <Modal v-model="show">
        <h1 style="text-align: center">Update Profile</h1>
             <v-form
                ref="form"
                lazy-validation
                @submit.prevent="submit()"
            >
                <v-text-field
                    v-model="form.name"
                    label="Name"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.gender"
                    label="Gender"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.birthday"
                    label="Birthday"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.hometown"
                    label="Hometown"
                    
                    ></v-text-field>
                <v-text-field
                    v-model="form.bio"
                    label="Bio"
                    
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
        name: 'UpdateProfileComponent',
        props: {
            value: Boolean
        },
        data(){
            return{
                    form:{
                        name:'',
                        gender:'',
                        birthday:'',
                        hometown:'',
                        bio:'',
                    },
            }
        },
        validations:{
            form:{
                    name:{ 
                        required, 
                    },
                    gender:{ 
                        required, 
                    },
                    birthday:{ 
                        required, 
                    },
                    hometown:{ 
                        required, 
                    },
                    bio:{ 
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