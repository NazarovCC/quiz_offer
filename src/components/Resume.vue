<template>
  <div class="container">
    <p class="resume">
      Ваш результат: <strong>{{ result }}</strong>
    </p>
    <p class="resume_text">{{ pr }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useResume } from "../use/resumeVariant";

export default {
  setup() {
    const store = useStore();

    const result = computed(() => {
      return store.getters["getProbab"];
    });
    return {
      result,
      ...useResume(result),
    };
  },
};
</script>

<style>
.resume {
  font-size: 1.5em;
  text-decoration: underline;
}
.resume_text {
  font-size: 1.5em;
}
</style>
