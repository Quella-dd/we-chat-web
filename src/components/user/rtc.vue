<template>
    <div class="rtc">
        <button @click="start">开始录制</button>
        <video autoplay controls id="stream"></video>
        <div class="handout">
             <img class="img" src="/static/icon/hangout.png" @click="hangout">
        </div>
    </div>
</template>

<script>
export default {
    name: 'RTC',
    data: function(){
        return {
            constraints: {
                audio: true, 
                video: true
            },
            pc: null
        }
    },
    methods: {
        start: function() {
            let video = document.getElementById('stream')
            navigator.getUserMedia(this.constraints, this.gotStream, function(err) {
                console.log(err)
            })
        },
        gotStream: function() {
            this.pc = new RTCPeerConnection();
            this.pc.addStream(stream); 
            this.pc.createOffer(function(offer) { 
                this.pc.setLocalDescription(offer); 
            });  
        },
        logError: function() {

        },
        hangout: function() {

        }
    }
}
</script>

<style scoped>
.rtc {
    position: fixed;
    height: 400px;
    width: 400px;
    top: 60px;
    left: 50%;
}

#stream {
    width: 100%;
    height: 100%;
}
.handout {
    display: flex;
    justify-content: center;
}

.handout img {
    position: absolute;
    bottom: 50px;
    width: 40px;
    height: 40px;
}
</style>