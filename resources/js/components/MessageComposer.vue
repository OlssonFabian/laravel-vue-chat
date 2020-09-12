<template>
    <div class="composer">
        <textarea v-model="message" @keydown.enter="send" placeholder="Message ..."></textarea>
    </div>
</template>

<script>
    export default {
        methods: {
            data(){
                return {
                    message: ''
                }
            },
            send() {
                if (this.message =='') {
                    return;
                }

                this.$emit('send', this.message); //sending message.
                this.message = ''; //cllear the textarea after send.
            }
        }
    }
</script>
