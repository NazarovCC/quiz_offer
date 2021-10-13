<template>
  <Resume></Resume>
  <button class="btn btn-success" @click="router.push('/')">Сначала</button>
</template>

<script>
import { useRouter } from "vue-router";
import Resume from "../components/Resume.vue";
export default {
  components: {
    Resume,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style></style>
