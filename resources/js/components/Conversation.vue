<template>
    <div class="conversation">
        <h1> {{ contact ? contact.name: 'Select a Contact' }}</h1>
        <messageFeed :contact="contact" :messages="messages"/>
        <messageComposer @send="sendMessage" />
    </div>
</template>

<script>
import MessageComposer from './MessageComposer';
import MessageFeed from './MessageFeed';

export default {
    props: {
        contact: {
            type: Object,
            default: null
        },
        messages: {
            type: Array,
            default: []
        }
    },
    methods: {
        sendMessage(text){
            if (!this.contact) {
                return;
            }

            axios.post('/conversation/send', {
                contact_id: this.contact.id,
                text: text
            }).then((response) => {
                this.$emit('new', response.data);
            })
        }
    },
    components: {MessageFeed, MessageComposer}

}
</script>
