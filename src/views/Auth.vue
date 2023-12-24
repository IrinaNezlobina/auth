<template>
    <section class="h-100 gradient-form mt-4" style="background-color: #eee;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">

                                    <div class="text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                             style="width: 185px;" alt="logo">
                                        <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                    </div>

                                    <form @submit.prevent="sendData">
                                        <p>Please login to your account</p>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example11">Login</label>
                                            <input v-model="form.username" required type="text" id="form2Example11" class="form-control" />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example22">Password</label>
                                            <input v-model="form.password" required type="password" id="form2Example22" class="form-control" />
                                        </div>

                                        <button class="btn w-100 btn-primary mb-3" type="submit">
                                            <span v-if="send">
                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </span>
                                            <span v-else>
                                                Login
                                            </span>
                                        </button>

                                        <div class="d-flex align-items-center justify-content-center pb-4">
                                            <p class="mb-0 me-2">Don't have an account?</p>
                                            <button @click="goToRegistration" type="button" class="btn btn-outline-danger">Create new</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 class="mb-4">We are more than just a company</h4>
                                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { Login } from '@/api/auth.js';
import { ref, reactive } from "vue";
import { setToken } from '@/utils/auth.js';

export default {
    setup() {
        // variables
        // const route = useRoute();
        const router = useRouter();
        const send = ref(null);
        const form = reactive({
           username: '',
           password: '',
        });


        // methods

        // function goToRegistration() {
        //
        // }
        const goToRegistration = () => {
            router.push('/registration');
        };

        const sendData = async () => {
            send.value = true;

            try {
                const res = await Login(form);

                if (res) {
                    setToken(res);
                    router.push('/home');
                }
            } catch (e) {
                console.log(e);
            } finally {
                send.value = false;
            }
        }

        // computed

        // hooks

        return {
            form,
            send,
            sendData,
        }
    },
}
</script>

<style scoped>
.gradient-custom-2 {
    /* fallback for old browsers */
    background: #fccb90;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
    .gradient-form {
        height: 100vh !important;
    }
}
@media (min-width: 769px) {
    .gradient-custom-2 {
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }
}
</style>
