<template>
  <div class="popup">
    <router-link
      class="close"
      to="/profile/orders"
    ></router-link>
    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <div class="popup__button">
      <router-link
        class="button"
        to="/profile/orders"
      >
        Отлично, я жду!
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/app';

.popup {
  @include pf_center-all;
  z-index: 10;
  box-sizing: border-box;
  display: block;
  width: 420px;
  padding: 64px 95px;
  background-color: $white;
  box-shadow: $shadow-light;

  &::before,
  &::after {
    position: absolute;
    width: 48px;
    height: 48px;
    content: '';
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &::before {
    top: 15px;
    left: 15px;
    background-image: url('../img/filling/ananas.svg');
  }

  &::after {
    right: 15px;
    bottom: 15px;
    background-image: url('../img/filling/tomatoes.svg');
  }

  p {
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
  }
}

.popup__title {
  font-size: 1.3em;
  text-align: center;
}

.popup__button {
  a {
    padding: 16px 32px;
  }
}
</style>
