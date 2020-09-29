<template>
    <div class="conversation">
        <h1 class="d-none d-md-flex d-lg-flex"> {{ contact ? contact.name: 'Select a Contact' }}</h1>
        <messageFeed :contact="contact" :messages="messages"/>
        <messageComposer @send="sendMessage" />
        <div class="avatar" v-if="contact">
            <v-img max-height="80"
                    max-width="80"
                    :src="contact.profile_picture"
                    alt="contact.name"
                    class="avatar-image"
            >
            </v-img>
        </div>
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
<style lang="scss" scoped>
.conversation {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        font-size: 20px;
        padding: 10px;
        margin: 0;
        border-bottom: 1px dashed lightgray;
    }
    .avatar {
        flex: 1;
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        align-items: center;
        &-image{
            border-radius: 50%;
        }
    }
}
</style>
