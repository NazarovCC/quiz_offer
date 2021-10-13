<template>
  <h3>{{ question.question }}</h3>
  <label for="inp">{{ question.ask.title }}</label>
  <input type="text" class="form-control" id="inp" v-model="value" />
  <strong class="redText" v-if="!isValid">Введите число от 0 до 10</strong>
  <br />
  <button class="btn btn-primary mt-3" :disabled="!isValid" @click="onClick">
    Отправить
  </button>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useValidation } from "../use/inputValidation";
export default {
  props: {
    question: {
      type: Object,
    },
    nextQuestion: {
      type: Function,
    },
  },
  setup(props) {
    let num = -50;
    const store = useStore();
    const router = useRouter();
    const questions = store.getters["getChildrenQuestion"];
    const childrenActiveQuestion = computed(() => {
      return store.getters["getActiveQuestion"];
    });
    let value = ref(props.question.ask.value);

    const onClick = () => {
      if (value.value === "0") {
        num = 20;
      }
      if (props.question.id !== questions.length) {
        if (num) {
          console.log(num);
          store.commit("changeProb", num);
          router.push(
            `/children-questions/${childrenActiveQuestion.value + 1}`
          );
        }
      } else {
        router.push("/");
      }
    };

    return {
      value,
      onClick,
      ...useValidation(value),
    };
  },
};
</script>

<style>
.redText {
  color: red;
}
</style>
