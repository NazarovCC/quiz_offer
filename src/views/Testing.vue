<template>
  <div>
    <h3>Тестирование</h3>
    <p>
      Прости, но такой вакансии пока нет, может на кого-то другого хочешь
      попробоваться?
    </p>
    <button class="btn btn-warning" @click="router.push('/')">Возможно</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style></style>
