<template>
    <div class="conversation">
        <h1> {{ contact ? contact.name: 'Select a Contact' }}</h1>
        <messagesFeed :contact="contact" :messages="messages"/>
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
        messagen: {
            type: Array,
            default: []
        }
    },
    methods: {
        sendMessage(text){
            console.log(text)
        }
    }

}
</script>
