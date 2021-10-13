export function useResume(count) {
  const diffVar = {
    nuwbie: "К сожалению, нам с тобой не по пути",
    middle: "Ну если больше никто не придёт, то возьмём тебя",
    hight: "Проверь почту, там уже лежит оффер",
  };
  let pr = "";
  if (count.value > 0 && count.value <= 50) {
    pr = diffVar.nuwbie;
  } else if (count.value > 50 && count.value <= 80) {
    pr = diffVar.middle;
  } else if (count.value > 80 && count.value <= 100) {
    pr = diffVar.hight;
  }
  return {
    pr,
  };
}
