<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        hideDiv() {
            console.log("clicked");
            document.getElementById("login").style.display = "none";
        },
        login() {
            const payload = {
                username: this.username,
                password: this.password,
            };
            console.log(payload);
            fetch('https://shoe-api-cyzq.onrender.com/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'error') {
                        throw new Error(data.message || 'Login failed');
                    }
                    // if user admin is false, this.errror will be displayed
                    // // if (data.user.admin === 0) {
                    //     this.error = 'You are not an admin. You cannot log in.';
                    //     console.log(data.user.admin);
                    //     return;
                    // }

                    // Handle successful login here, e.g. by storing the returned token and redirecting the user
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('isLoggedIn', true);
                    this.$router.push('/home');
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                    this.error = 'You cannot log in. Either your password or e-mail is wrong.';
                });
        }
    }
}
</script>

<template>
    <!-- display error message if login fails -->
    <div v-if="error">
        <p class="text-white bg-[red] p-5">{{ error }}</p>
    </div>
    <div id="login" class="
            bg-[url('https://static.wixstatic.com/media/24eabc_06f112f5cdc742198a78e49953eafd0df000.jpg/v1/fill/w_1519,h_803,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/24eabc_06f112f5cdc742198a78e49953eafd0df000.jpg')]
            bg-cover
            bg-no-repeat
            bg-center
            justify-center flex c-primary h-[1000px] w-[100%]">
        <!-- login form -->
        <form @submit.prevent="login" class="flex flex-col p-9 mt-[10%] bg-black">
            <img src="../assets/logo.svg" class="mb-[-50px] w-[60%]" alt="">

            <p class="text-primary mb-5 font-bold text-3xl">LOGIN</p>

            <p class="text-white">Username</p>

            <input class="rounded-md bg-black border-2 border-white text-white" v-model="username" type="text" placeholder="Username">
            
            <p class="text-white mt-3">Password</p>

            <input class="rounded-md bg-black border-2 border-white text-white" v-model="password" type="password">

            <button type="submit" class="rounded-md mt-10 bg-primary font-semibold text-black p-2">Login</button>
        </form>
    </div>
    
</template>