<template>
  <Question
    :question="question"
    :nextQuestion="nextQuestion"
    v-if="question"
    :questions="questions"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import Question from "../components/Question.vue";
export default {
  components: {
    Question,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const answers = computed(() => {
      return store.getters["getAnswerQuestion"];
    });
    const question = computed(() => {
      return store.getters["getQuestion"].find(
        (que) => que.id === Number(route.params.id)
      );
    });
    const isActiveQuestion = computed(() => {
      return store.getters["getActiveQuestion"];
    });
    const questions = computed(() => {
      return store.getters["getQuestion"];
    });
    const nextQuestion = (id, value) => {
      const answer = answers.value.find((answ) => answ.id === id);

      if (value) {
        store.commit("changeProb", value);
        router.push(`/questions/${isActiveQuestion.value + 1}`);
      } else {
        if (answer.id === 2) {
          router.push(`/testing`);
        } else {
          store.commit("setAnswerId", answer.id);
          store.commit("updateCashQuestion", isActiveQuestion.value + 1);
          router.push(`/children-questions/1`);
        }
      }
      if (isActiveQuestion.value === questions.value.length) {
        router.push(`/theend`);
      }
    };
    return {
      questions,
      question,
      nextQuestion,
    };
  },
};
</script>

<style></style>
