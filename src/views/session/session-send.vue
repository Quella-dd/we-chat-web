<template>
    <div>
        <div class="message-action">
            <div class="ui-icon-30 ui-action-icon m-r-10"></div>
            <div class="ui-icon-30 ui-action-picture m-r-10"></div>
            <div class="ui-icon-30 ui-action-vedio"></div>
        </div>
        <el-input 
            type="textarea"
            v-model="value"
            :autosize="{ minRows: 4, maxRows: 8}">
        </el-input>
        <el-button type="success" @click="sendMesage">sendMessage</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        }
    },
    methods: {
        sendMesage: function() {
            this.$store.dispatch('sendMessage', {
                'Content': this.value,
                'Stype': this.$store.state.session.Stype,
                'OwnerID': this.$store.state.session.OwnerID,
                'DestinationID': this.$store.state.session.DestinationID,
                'RoomID': this.$store.state.session.RoomID,
            })
            this.cleanInputMessage()
        },

        cleanInputMessage: function() {
            this.value = '';
        }
    }
}
</script>