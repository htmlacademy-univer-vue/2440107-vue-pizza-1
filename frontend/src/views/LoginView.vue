<template>
  <div class="sign-form">
    <router-link to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </router-link>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>
    <form action="test.html" method="post" @submit.prevent="login">
      <div class="sign-form__input">
        <label class="input">
          <span>E-mail</span>
          <input
            v-model="user.email"
            type="email"
            name="email"
            placeholder="example@mail.ru"
            required
          />
        </label>
      </div>

      <div class="sign-form__input">
        <label class="input">
          <span>Пароль</span>
          <input
            v-model="user.password"
            type="password"
            name="pass"
            placeholder="***********"
            required
          />
        </label>
      </div>
      <button type="submit" class="button">Авторизоваться</button>
    </form>
    <div v-if="hasWarning">Неправильный логин или пароль!</div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store";

const authStore = useAuthStore();
const router = useRouter();

const hasWarning = ref(false);
const user = reactive({
  email: "user@example.com",
  password: "user@example.com",
});

const login = async () => {
  const auth = await authStore.authorize(user);

  if (auth) router.push("/profile");

  hasWarning.value = !auth;
};
</script>

<style lang="scss">
@import "@/assets/scss/app";

.sign-form {
  @include pf_center-all;
  z-index: 10;
  box-sizing: border-box;
  display: block;
  width: 455px;
  padding-top: 146px;
  padding-right: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
  background: $white url("../assets/img/popup.svg") no-repeat center top;
  box-shadow: $shadow-light;
  &__title {
    margin-bottom: 24px;
    text-align: center;
  }
  &__input {
    margin-bottom: 16px;
  }
  button {
    padding: 16px 14px;
    margin: 0 auto;
  }
}
</style>
