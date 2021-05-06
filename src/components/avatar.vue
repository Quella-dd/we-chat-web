<template>
    <div class="demo-image">
        <div class="block" :key="fit">
            <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
        </div>
    </div>
</template>

<script>
export default {
    name: 'avatar',
    props: ['url'],
    data: function() {
        return {
            fit: 'cover'
        }
    }
}
</script>