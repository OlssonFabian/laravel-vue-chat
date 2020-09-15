<template>
    <div class="feed" ref="feed">
        <ul v-if="contact">
            <li v-for="message in messages"
            :class="`message${message.to == contact.id ? ' sent' : 'reccieved'}`"
            :key="message.id">
                <div class="text">
                    {{ message.text }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            contact: {
                type: Object,
            },
            messages: {
                type: Array,
                required: true
            }
        },
        methods: {
            scrollToMostRecent() {
                setTimeout(()=> {
                    this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
                }, 50);
            }
        },
        watch: {
            contact(contact) {
                this.scrollToMostRecent();
            },
            messages(messages) {
                this.scrollToMostRecent();
            }
        }
    }
</script>
