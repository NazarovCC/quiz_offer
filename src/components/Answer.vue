<template>
  <div>
    <li
      class="list-group-item list-group-item-action mt-3"
      @click="nextQuestion(answer.id, answer.value)"
    >
      {{ answer.title }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: Object,
    },
    nextQuestion: {
      type: Function,
    },
  },
};
</script>

<style></style>
