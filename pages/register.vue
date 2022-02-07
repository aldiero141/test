<template>
    <div class="container">
        <Card>
            <h1>Register</h1>
             <v-form
                ref="form"
                lazy-validation
            >
                <v-text-field
                    label="Phone"
                    required
                    value="+62"
                    ></v-text-field>

                <v-text-field
                    type="password"
                    label="Password"
                    required
                    ></v-text-field>

                <v-text-field
                    type="text"
                    label="Country"
                    required
                    ></v-text-field>

                <div class="d-flex mt-2 justify-end" >
                    <v-btn type="submit" color="blue" to="/profile">
                        register
                    </v-btn>
                </div>
                
            </v-form>
        </Card>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
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