<template>
  <router-view />
</template>

<script setup>
import { getToken, removeToken } from '@/services/auth/auth.js';
import { useAuthStore, useCartStore, useCommonStore } from '@/store';

const token = getToken();

const initInfo = async () => {
  const cartStore = useCartStore();
  const commonStore = useCommonStore();
  const items = ['ingredients', 'dough', 'sauces', 'sizes'];

  items.forEach(async (item) => {
    await commonStore.getItems(item);
  });

  await cartStore.getMiscs();

  if (token) {
    try {
      const authStore = useAuthStore();
      await authStore.setUserInfo();
    } catch (e) {
      removeToken();
    }
  }
};

initInfo();
</script>

<style lang="scss">
@import '@/assets/scss/app';
body {
  align-items: center;
  justify-content: center;
}
.main__wrapper {
  padding-bottom: 30px;
  background-color: $white;
  box-shadow: $shadow-light;
  h1 {
    padding: 0 95px;
    margin-bottom: 0;
    text-align: center;
    @include b-s36-h42;
  }
  p {
    padding: 0 95px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
  b {
    font-size: 1.2em;
  }
}

.main__header {
  padding: 20px 0;
  margin-bottom: 30px;
  background-color: $green-600;
  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
