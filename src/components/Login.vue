<template>
    <div class="body">
        <div class="item">
            <label class="item-label">请输入用户名</label>
            <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div class="item">
            <label class="item-label">请输入密码</label>
            <el-input v-model="password" placeholder="请输入内容" show-password></el-input>
        </div>
        <div v-if="!loginActive" class="item"> 
            <label class="item-label">请输入邮箱</label>
            <el-input v-model="email" placeholder="请输入内容"></el-input>
        </div>

        <div v-if="loginActive" class="item-foot">
            <el-button @click="login">登录</el-button>
            <el-button type="primary" @click="registry">注册</el-button>
        </div>
        <div v-if="!loginActive" class="item-foot">
            <el-button type="primary" @click="registry">注册</el-button>
            <el-button @click="cancel">取消</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            msg: 'this is login vue',
            name: '',
            password: '',
            email: '',
            loginActive: true,
        }
    },

    methods: {
        login: async function() {
            try {
                let value = await this.$store.dispatch('login', {
                    name: this.name,
                    password: this.password
                })

                this.$session.start()
                this.$session.set("user", JSON.stringify(value.data[0]))
                
                // this.$store.commit('updateSessionUser', {
                //     user: value.data[0]
                // })

                 this.$store.commit('createWs', {})
                window.location = '/#/index'
            } catch (e) {
                this.$message.error('登录失败，请重新登录', e)
            }
        },
        
        registry: function() {
            if (this.loginActive) {
                this.loginActive = false;
                return;
            }

            try {
                this.$store.dispatch( 'registry', {
                    name: this.name,
                    password: this.password,
                    email: this.email
                })
                this.$message('注册成功，请重新登录')
                this.loginActive = true;
            } catch (e) {
                this.$message.error('注册失败', e)
            }
        },

        cancel: function() {
            this.loginActive = true;
        }
    }
}
</script>

<style scoped>
.body {
    width: 50%;
    margin-left: 25%;
}

.item {
    margin-top: 10px;
}

.item-label {
    float: left;
    margin-bottom: 10px;
}

.item-foot {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
}
</style>