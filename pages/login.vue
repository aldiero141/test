<template>
    <div class="container">
        <Card>
            <h1>Login</h1>
             <v-form
                ref="form"
                lazy-validation
                @submit.prevent="submit()"
            >
                <v-text-field
                    v-model="form.phone"
                    label="Phone"
                    :error-messages="$v.form.phone.$dirty && !$v.form.phone.required ? 'test' : []"
                    @blur="$v.form.phone.$touch()"
                    ></v-text-field>
                
                <!-- <v-text-field
                    v-model="form.password"
                    type="password"
                    label="Password"
                    
                    ></v-text-field> -->
                <div class="d-flex mt-2 justify-end" >
                    <v-btn type="submit" color="green">
                        Login
                    </v-btn>
                </div>
                
            </v-form>
        </Card>
    </div>
</template>

<script>
import {
  required,
//   minLength,
//   maxLength,
} from "vuelidate/lib/validators";

export default {
    name: 'LoginPage',
    
    data() {
        return {
            form: {
                phone : '',
                password : '',
            }
        }
    },
    
    validations: {
        form: {
            phone: {
                required
            },
        }
        
        // password: {
        //     required,
        //     minLength: minLength(8),
        //     maxLength: maxLength(16),
        // },
    },
    // computed: {
    //     phoneNumberErrorMessage() {
    //         return Date.now()
    //     }
    // },
    methods: {
        submit(){
            this.$v.$touch()
            if(this.$v.$invalid) {
                return false
            }
        }
    }
   
}
</script>

<style scoped>
h1{
    text-align: center;
    font-size: 1.5em;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    margin-top: 1em;
}
</style>