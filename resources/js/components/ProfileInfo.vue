<template>
    <div class="profile-info">
        <v-row
        align="center"
        justify="center"
        >
            <v-card
            height="300"
            width="250"
            >
                <v-row justify="center">
                    <v-overlay
                        :absolute="absolute"
                        :opacity="opacity"
                        :value="this.$parent.showContactProfile"
                    >
                <v-btn
                    color="orange lighten-2"
                    @click="closeContactProfile"
                >
                    Hide Overlay
                </v-btn>
                    </v-overlay>
                </v-row>
            </v-card>
        </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        absolute: true,
        opacity: 1,
    }),
    props: {
        showContactProfile: true,
    },
    methods: {
        closeContactProfile(){
            this.$parent.showContactProfile = !this.$parent.showContactProfile;
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
.profile-info {

}
</style>
