<template>
    <div class="content-body">
        <siderBar></siderBar>
        <hr>
        <div class="list-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import siderBar from '@/views/compent/side-bar'

export default {
    components: {
        siderBar
    }
}
</script>