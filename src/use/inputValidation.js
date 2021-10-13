import { watch, ref } from "vue";

export function useValidation(numberInput) {
  const isValid = ref(false);

  watch(numberInput, (value) => {
    const number = Number(value);
    if (number <= 10 && number >= 0 && value !== "") {
      isValid.value = true;
    } else {
      isValid.value = false;
    }
  });
  return {
    isValid,
  };
}
