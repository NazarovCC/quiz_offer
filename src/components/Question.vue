<template>
  <div class="card center" v-if="question" style="width: 50rem">
    <div class="card-body">
      <h5 class="card-title">{{ question.id }}. {{ question.question }}</h5>
      <answer-list
        :answers="question.ask"
        :nextQuestion="nextQuestion"
        v-if="question.type === 'selected'"
      ></answer-list>
      <answer-input
        :nextQuestion="nextQuestion"
        v-else
        :question="question"
      ></answer-input>
    </div>
  </div>
</template>

<script>
import { onUpdated, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import AnswerList from "./AnswerList.vue";
import AnswerInput from "./AnswerInput";
export default {
  props: {
    question: {
      type: Object,
    },
    nextQuestion: {
      type: Function,
    },
    questions: {
      type: Object,
    },
  },
  components: {
    AnswerList,
    AnswerInput,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const ball = computed(() => {
      return store.getters["getProbab"];
    });
    onUpdated(() => {
      store.commit("incremActiveQuestion", 1);
    });

    return {
      ball,
      router,
    };
  },
};
</script>

<style>
.center {
  margin: 0px auto;
}
</style>
