<template>
    <div class="d-flex flex-column mt-4">
        <v-row class="align-center">
             <Card>
                Banner
            </Card>
        </v-row>
        <v-row class="mt-4">
            <v-col>
                <v-row>
                    <v-avatar size="160" class="mx-auto">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                            width="100%"
                        >
                    </v-avatar>
                </v-row>
                <v-row>
                    <Card>
                        Banner
                    </Card>
                </v-row>
            </v-col>
            <v-col >
                <Card>
                    Banner
                </Card>
            </v-col>    
            <v-col class="mr-n3">
                <Card>
                    Banner
                </Card>
            </v-col>    
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
    layout: 'dashboard',
}
</script>

