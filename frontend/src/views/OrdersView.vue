<template>
  <div class="layout__content">
    <div class="layout__title">
      <h1 class="title title--big">История заказов</h1>
    </div>

    <p v-if="!commonStore.orders.length">Заказов нет</p>
    <div v-else>
      <section
        v-for="order of orders"
        :key="order.id"
        class="sheet order"
      >
        <OrderItem
          :order="order"
          @delete="deleteOrder(order.id)"
          @repeat="repeatOrder(order)"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import OrderItem from '@/modules/orders/OrderItem.vue';
import { useCartStore, useCommonStore } from '@/store';

const commonStore = useCommonStore();
const cartStore = useCartStore();
const router = useRouter();

const orders = computed(() => commonStore.getOrders);

commonStore.getAllOrders();

const deleteOrder = (id) => {
  commonStore.deleteOrder(id);
};

const repeatOrder = (order) => {
  order.orderPizzas.forEach((pizza) => cartStore.addPizza({ ...pizza }));
  order.orderMisc.forEach((misc) => cartStore.updateMisc({ ...misc }));

  router.push('/cart');
};
</script>
