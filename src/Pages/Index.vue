<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter();

const Logout = () => {
  router.push('/login');
}
</script>

<template>
  <div class="container pt-5">
    <button class="btn btn-primary" @click="Logout">LOGOUT</button>
  </div>
</template>