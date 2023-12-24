<template>
    <div>
        <h1>Поздравляем вы авторизованы !!!</h1>
        <h2>{{ data }}</h2>
    </div>
</template>

<script>
import { Resource } from '@/api/resources.js';
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const data = ref(null);

        const getData = async () => {
            try {
                const res = await Resource();
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        }

        onMounted(async () => {
           await getData();
        });

        return {
            data,
        }
    }
}
</script>

<style scoped>

</style>