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
    const cash = computed(() => {
      return store.getters["getCash"];
    });
    const answers = computed(() => {
      return store.getters["getAnswerQuestion"];
    });

    const question = computed(() => {
      return store.getters["getDopQuestion"].find(
        (que) => que.id === Number(route.params.id)
      );
    });
    const isActiveQuestion = computed(() => {
      return store.getters["getActiveQuestion"];
    });
    const questions = computed(() => {
      return store.getters["getDopQuestion"];
    });
    const nextQuestion = (id, value) => {
      const answer = answers.value.find((answ) => answ.id === id);
      if (value) {
        store.commit("changeProb", value);
        router.push(`/questions/${isActiveQuestion.value + 1}`);
      } else {
        store.commit("setAnswerId", answer.id);
        store.commit("setCashQuestion", isActiveQuestion.value + 1);
        router.push(`/children-questions/1`);
      }
      if (isActiveQuestion.value === questions.value.length) {
        if (cash.value > 0) {
          store.commit("updateActiveQuestion", cash.value);
          router.push(`/questions/${isActiveQuestion.value}`);
          store.commit("updateCashQuestion", 0);
        }
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
