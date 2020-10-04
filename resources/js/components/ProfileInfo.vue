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
                    <h1>{{contact.name}}</h1>
                    <h3 italic>{{contact.company}}</h3>
                    <span v-for="value in contact.rating" v-bind:key="value">
                            <v-icon size=20 color="yellow" >mdi-star</v-icon>
                        </span>
                    <p>{{contact.about}}</p>
                    </v-overlay>
                </v-row>
            </v-card>
        </v-row>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            default: null
        }
    },
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
