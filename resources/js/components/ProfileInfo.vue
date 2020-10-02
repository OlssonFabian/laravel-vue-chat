<template>
    <div class="profile-info">
        <button @click="showInfo">click Me NOW!</button>
    </div>
</template>

<script>
import ContactsList from './ContactsList';
export default {
    props: {
        contact: {
            type: Object,
            default: null
        },
    },
    methods: {
        showInfo(){
            console.log(this.contact.name)
        }
    },
    mounted() {
        axios.get(`/contact/${contact.id}`).then((response) => {
                    console.log(response.data)
                    this.contact = response.data;
                });
    },
    components: {ContactsList}
}
</script>
<style lang="scss" scoped>
.profile-info {

}
</style>
