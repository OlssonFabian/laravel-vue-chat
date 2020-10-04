<template>
    <div class="chat-app d-flex flex-column flex-md-column flex-lg-row">
        <div class="contact-toggler d-lg-none d-xl-none">
            <v-btn block elevation="2" @click="toggleForContacts">
                Choose contact
            </v-btn >
            <v-btn class="selected-contact" v-if="selectedContact" small elevation="1" @click="toggleForContactProfile">
                <v-icon>mdi-account</v-icon> {{selectedContact.name}}
            </v-btn>
        </div>
        <div v-if="contactProfileToggle" class="contact-profile">
            <ProfileInfo :contact="selectedContact"/>
        </div>
        <Conversation :contact="selectedContact" :messages="messages" @new="saveNewMessage"/>
        <ContactsList class="contacts-list flex-row d-none d-md-none d-lg-flex" :contacts="contacts" @selected="startConversationWith"/>
        <v-overlay :z-index="zIndex" :color="color" :opacity="opacity" :value="showContacts" class="d-flex flex-row d-md-none d-md-flex d-lg-none">
            <v-btn
            color="error"
            fab
            medium
            dark
            right
            top
            absolute
            @click="toggleForContacts"
            >
            <v-icon>mdi-close</v-icon>
            </v-btn>
            <ContactsList class="d-flex d-md-flex d-lg-none"
                        :contacts="contacts"
                        @selected="startConversationWith"
            />
        </v-overlay>
    </div>
</template>

<script>
    import Conversation from './Conversation';
    import ContactsList from './ContactsList';
    import ProfileInfo from './ProfileInfo';
    export default {
        contactProfileToggle: Boolean,
        props: {
            user: {
                type: Object,
                required: true
            },

        },
        data() {
            return {
                selectedContact: null,
                messages: [],
                contacts: [],
                showContacts: false,
                zIndex: 5,
                opacity: 0.9,
                color: 'white',
                contactProfileToggle: false,
            };
        },
        mounted() {
            Echo.private(`messages${this.user.id}`)
            .listen('NewMessage', (e)=> {
                this.handleIncoming(e.message);
            })
            console.log(this.user);
            axios.get('/contacts')
                .then((response) => {
                    console.log(response.data)
                    this.contacts = response.data;
                });
        },
        methods: {
            startConversationWith(contact) {
                axios.get(`/conversation/${contact.id}`)
                .then((response)=> {
                    this.messages = response.data
                    this.selectedContact = contact
                })
                this.toggleForContacts();
            },
            saveNewMessage(text) {
                this.messages.push(text);
            },
            handleIncoming(message) {
                if(this.selectedContact && message.from == this.selectedContact.id) {
                    this.saveNewMessage(message);
                    return;
                }
            },
            toggleForContacts: function() {
                this.showContacts = !this.showContacts;
            },
            toggleForContactProfile: function(contactProfileToggle) {
                this.contactProfileToggle = !this.contactProfileToggle;
                this.$emit("contactProfileToggle", contactProfileToggle);
            },

        },
        components: {Conversation, ContactsList, ProfileInfo}
    }
</script>

<style lang="scss" scoped>
.chat-app {
    .contacts-list{
        color: black;
        width: 100vw;
    }
    .selected-contact{
        position: absolute;
        z-index: 5;
    }
}
</style>
