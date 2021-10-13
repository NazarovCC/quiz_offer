<template>
  <button class="btn btn-primary" @click="Start">Начать тест</button>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const Start = () => {
      router.push("/questions/1");
      store.commit("setAnswerId", 0);
      store.commit("updateActiveQuestion", 1);
      store.commit("updateCashQuestion", 0);
      store.commit("updateProb", 0);
    };

    return {
      Start,
    };
  },
};
</script>

<style></style>
