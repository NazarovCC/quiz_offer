<template>
  <Question
    :question="children"
    :questions="childrens"
    v-if="children"
    :nextQuestion="nextQuestion"
  />
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Question from "../components/Question";
export default {
  components: { Question },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const childrenActiveQuestion = computed(() => {
      return store.getters["getActiveQuestion"];
    });
    const childrens = computed(() => {
      return store.getters["getChildrenQuestion"];
    });
    const children = computed(() => {
      return childrens.value.find((que) => que.id === Number(route.params.id));
    });

    const ball = computed(() => {
      return store.getters["getProbab"];
    });
    const proverka = store.getters["getProverka"];
    const childrenAnswerQestion = computed(() => {
      return store.getters["getChildrenAnswerQuestion"];
    });
    const nextQuestion = (id, value) => {
      const answer = childrenAnswerQestion.value.find((answ) => answ.id === id);

      if (value) {
        store.commit("changeProb", value);
        router.push(`/children-questions/${childrenActiveQuestion.value + 1}`);
      } else {
        store.commit("setAnswerId", answer.id);
        router.push(`/children-questions/1`);
        const children = store.getters["getChildrenQuestion"][answer.id];
        console.log(children);
      }
      if (childrenActiveQuestion.value === childrens.value.length) {
        if (ball.value <= proverka) {
          router.push(`/theend`);
        } else {
          store.commit("updateActiveQuestion", 1);
          router.push(`/dop-questions/${childrenActiveQuestion.value}`);
        }
      }
    };
    return {
      childrens,
      children,
      nextQuestion,
    };
  },
};
</script>

<style></style>
