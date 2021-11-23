<script setup lang="ts">
import { reactive, ref, toRef } from "@vue/reactivity";
import db from "../login_db";
import { useRouter } from "vue-router"
import { toRefs } from "vue";

const router = useRouter();
const status = ref<boolean | null>(null);

const form = reactive({
  username: '',
  mima: '',
  memberme: false,
})

const Login = () => {
  const { username, mima, memberme } = toRefs(form);
  const user = db.UserDB.find(u => u.username == username.value && u.pwd == mima.value);

  const hasUser = Boolean(user);

  status.value = hasUser;

  if (hasUser) {
    router.push('/home')
  }
}

const Reset = () => {
  form.username = '';
  form.mima = '';
  form.memberme = false;
}

</script>

<template>
  <div class="container py-5">
    <h1 class="text-center">登入</h1>
    <form class="login-form" @submit="Login" @reset="Reset">
      <div class="mb-3">
        <label for="account" class="form-label">帳號</label>
        <input v-model="form.username" type="text" class="form-control" id="account" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="mima" class="form-label">密碼</label>
        <input v-model="form.mima" type="password" class="form-control" id="mima">
      </div>
      <div class="mb-3 form-check">
        <input v-model="form.memberme" type="checkbox" class="form-check-input" id="memberme">
        <label class="form-check-label" for="memberme">記住我</label>
      </div>
      <button type="submit" class="btn btn-primary">登入</button>
      <button type="reset" class="btn btn-text">重設</button>
    </form>
  </div>
</template>

<style>
  .login-form {
    max-width: 480px;
    margin: 0 auto;
  }
</style>
