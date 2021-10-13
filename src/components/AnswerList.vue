<template>
  <ul class="list-group" v-for="(answer, index) in answers" :key="index">
    <Answer :answer="answer" :nextQuestion="nextQuestion" />
  </ul>
</template>

<script>
import Answer from "./Answer.vue";

export default {
  components: {
    Answer,
  },
  props: {
    answers: {
      type: Object,
    },
    nextQuestion: {
      type: Function,
    },
  },
};
</script>

<style></style>
