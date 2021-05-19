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
            video: {},
            pc: null
        }
    },
    methods: {
        start: function() {
            this.video = document.getElementById('stream')
            navigator.mediaDevices.getUserMedia(this.constraints)
                .then(this.gotLocalMediaStream).catch(this.handleLocalMediaStreamError);
        },
        gotLocalMediaStream: function(mediaStream) {
            let localStream = mediaStream;
            this.video.srcObject = mediaStream;
        },
        handleLocalMediaStreamError: function(error) {
            console.log('navigator.getUserMedia error: ', error);
        },
        hangout: function() {
            console.log("event: hangout")
            this.video.pause();
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