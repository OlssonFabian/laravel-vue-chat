<template>
        <v-row
        absolute
        align="center"
        justify="center"
        >
                        <v-btn
                            color="error"
                            :z-index="zIndex + 1"
                            fab
                            medium
                            dark
                            left
                            top
                            absolute
                            @click="closeContactProfile"
                            >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
            <v-card
            height="40vh"
            width="90vw"
            >
                <v-row justify="center">
                    <v-overlay
                    :absolute="absolute"
                    :value="overlay"
                    :z-index="zIndex"
                    >
                    </v-overlay>
                </v-row>
            </v-card>
        </v-row>
</template>

<script>
export default {
    data: () => ({
        absolute: true,
        opacity: 1,
        zIndex: 100,
    }),
    contactProfileToggle: Boolean,

    methods: {
        closeContactProfile(){
            this.$parent.contactProfileToggle = !this.$parent.contactProfileToggle;
        }
    },
    // mounted() {
    //     axios.get(`/contact/${contact.id}`).then((response) => {
    //                 console.log(response.data)
    //                 this.contact = response.data;
    //             });
    // },
    // components: {ContactsList}
}
</script>
<style lang="scss" scoped>

</style>
