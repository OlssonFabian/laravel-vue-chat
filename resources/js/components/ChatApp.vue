<template>
    <div class="chat-app">
        <Conversation :contact="selectedContact" :messages="messages"/>
        <Contactsllist :contacts="contacts"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedContact: null,
                messages: [],
                contacts: [],
            };
        },
        mounted() {
            axios.get('/contacts')
                .then((response) => {
                    this.contacts = response.data;
                });
        }
    }
</script>
