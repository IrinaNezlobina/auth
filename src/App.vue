<script setup>
import { RouterLink, RouterView } from 'vue-router'</script>

<template>
  <div class="header">
    <Button>123</Button>
    <div class="wrapper">
      <nav>
        <RouterLink to="/registration">Registration</RouterLink>
        <RouterLink to="/">Auth</RouterLink>
      </nav>
    </div>
  </div>

  <RouterView class="mt-5 p-3" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    setup() {
        //variables ..
    },
    components: {
        Button: defineAsyncComponent(() => import('@/components/button.vue')),
    },
}
</script>

<style scoped>
.header {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    top: 0;
    right: 0;
    width: 100%;
    background: #252525;
    color: #fff;
    padding: 16px 24px;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
</style>
