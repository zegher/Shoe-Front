<template>
    <div id="login" class="
    bg-[url('https://static.wixstatic.com/media/24eabc_06f112f5cdc742198a78e49953eafd0df000.jpg/v1/fill/w_1519,h_803,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/24eabc_06f112f5cdc742198a78e49953eafd0df000.jpg')]
    bg-cover
            bg-no-repeat
            bg-center
    before:content-['']
            before:absolute
            before:inset-0
            before:block
    justify-center flex c-primary h-[1000px] w-[100%]">
        <!-- login form -->
        <form @submit.prevent="login" class="flex flex-col p-9 mt-[10%] bg-black h-[32%]">
            <p class="text-primary mb-5 font-bold text-3xl">LOGIN</p>
            <p class="text-white">Username</p>
            <input class=" bg-black border-2 border-white text-white" v-model="username" type="text">
            <p class="text-white mt-3">Password</p>
            <input class=" bg-black border-2 border-white text-white" v-model="password" type="password">
            <button type="submit" class="mt-10 bg-primary font-semibold text-black text-3xl pt-2">Login</button>
        </form>
    </div>
    
</template>

<script>
    export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
    login() {
        fetch('https://shoe-api-cyzq.onrender.com/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status !== 'success') {
                throw new Error(data.message || 'Login failed');
            }

            // Handle successful login here, e.g. by storing the returned token and redirecting the user
            localStorage.setItem('token', data.token);
            this.$router.push('/home');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            console.log(this.username, this.password);
        });
    }
}
}
</script>