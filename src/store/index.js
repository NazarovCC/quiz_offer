import { createStore, createLogger } from "vuex";

const plugins = [];

if (process.env.NODE_ENV === "development") {
  plugins.push(createLogger());
}

export default createStore({
  state() {
    return {
      mainquestion: {
        question: [
          {
            question:
              "Для начала давай определимся на какую вакансию ты претендуешь?",
            ask: [
              { title: "a. Веб-дизайнер", id: 1 },
              { title: "b. Тестировщик", id: 2 },
              { title: "c. Джуниор фронтенд разработчик", id: 3 },
            ],
            id: 1,
            type: "selected",
          },
          {
            question: "Есть ли у тебя опыт?",
            ask: [
              {
                title: "a. Больше 5 лет работаю по этой специальности",
                value: 20,
              },
              { title: "b. Ну немножко поработать успел", value: 10 },
              {
                title:
                  "c. Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу",
                value: 0,
              },
            ],
            id: 2,
            type: "selected",
          },
        ],
        answerId: 0,
      },
      children: {
        3: {
          question: [
            {
              question: "Начнём с простого, div от span отличишь?",
              ask: [
                {
                  title:
                    "a. Естественно, первый для контейнеров, второй для текста",
                  value: 15,
                  id: 1,
                },
                {
                  title: "b. Код пишут компьютеры, пусть они и отличают",
                  value: 10,
                  id: 2,
                },
                {
                  title: "c. Думаю, что да",
                  value: -5,
                  id: 3,
                },
              ],
              id: 1,
              type: "selected",
            },
            {
              question: "Окей, а с JS у тебя как?",
              ask: [
                { title: "a. Я как-то больше по JQuery", value: -30 },
                { title: "b. Норм, прошёл курс", value: 5 },
                {
                  title: "c. На чистом JS уже не первый год пишу",
                  value: 20,
                },
              ],
              id: 2,
              type: "selected",
            },
            {
              question: "Насколько ты любишь PHP?",
              ask: {
                title: "Введите число от 0 до 10",
                value: "",
              },
              id: 3,
              type: "inputString",
            },
            {
              question: "Сколько дней в неделю планируешь ходить в офис?",
              ask: [
                { title: "a. Я хочу работать удалённо", value: -20 },
                { title: "b. 3-4 дня в неделю будет норм", value: 5 },
                {
                  title: "c. Я перееду в ваш офис, крепитесь",
                  value: 20,
                },
              ],
              id: 4,
              type: "selected",
            },
          ],
          finishquestion: [
            {
              question: "Кстати, а оценку задач ты как даёшь?",
              ask: [
                { title: "a. По часам", value: 1.8 },
                { title: "b. По дням", value: 1.3 },
                {
                  title: "c. По наитию",
                  value: 0.6,
                },
              ],
              id: 1,
              type: "selected",
            },
          ],
          proverka: 40,
        },
        1: {
          question: [
            {
              question: "В какой программе делаешь макеты?",
              ask: [
                {
                  title: "a. Figma",
                  value: 15,
                  id: 1,
                },
                {
                  title: "b. Photoshop",
                  value: -10,
                  id: 2,
                },
                {
                  title: "c. В такой, о которой вы не слышали",
                  value: 0,
                  id: 3,
                },
              ],
              id: 1,
              type: "selected",
            },
            {
              question: "Любишь играться со шрифтами?",
              ask: [
                { title: "a. Я живу этим", value: 20 },
                { title: "b. Если очень попросите", value: 10 },
                {
                  title: "c. Я сам/сама создаю шрифты",
                  value: 30,
                },
                {
                  title: "d. Нет, в игры не играю",
                  value: -5,
                },
              ],
              id: 2,
              type: "selected",
            },
            {
              question: "А белый цвет сможешь белее сделать?",
              ask: [
                {
                  title:
                    "a. Я же говорил(а), что этого заказчика забанить надо",
                  value: 15,
                },
                {
                  title:
                    "b. Пусть заказчик приедет и на Ретине посмотрит ещё разок",
                  value: 5,
                },
                {
                  title: "c. Конечно сделаю, если #fff недостаточно",
                  value: -10,
                },
              ],
              id: 3,
              type: "selected",
            },
            {
              question: "Последний вопрос: в какую стороны расти планируешь?",
              ask: [
                { title: "a. До арт-дира, естественно", value: 20 },
                {
                  title: "b. В какую-то одну сферу хочу, но пока не знаю какую",
                  value: 10,
                },
                {
                  title: "c. Пока расту в ширину",
                  value: 5,
                },
              ],
              id: 4,
              type: "selected",
            },
          ],
          finishquestion: [
            {
              question: "Кстати, а оценку задач ты как даёшь?",
              ask: [
                { title: "a. По часам", value: 1.5 },
                { title: "c. По дням", value: 1.2 },
                {
                  title: "d. По наитию",
                  value: 0.7,
                },
              ],
              id: 1,
              type: "selected",
            },
          ],
          proverka: 50,
        },
      },
      probability: 0,
      activeQuestion: 1,
      cashactiveQuestion: 0,
    };
  },
  getters: {
    //MainQuestion ---------------------------------------------------
    getQuestion(state) {
      return state.mainquestion.question;
    },
    getAnswerQuestion(state, getters) {
      if (getters.getActiveQuestion <= getters.getQuestion.length) {
        const id = getters.getActiveQuestion;
        return state.mainquestion.question.find((quest) => quest.id === id).ask;
      } else {
        return null;
      }
    },
    getAnswerId(state) {
      return state.mainquestion.answerId;
    },
    //General------------------------------------------------------------
    getProbab(state) {
      return Math.round(Math.abs(state.probability));
    },
    getActiveQuestion(state) {
      return state.activeQuestion;
    },
    getCash(state) {
      return state.cashactiveQuestion;
    },
    //ChildrenQuestion ---------------------------------------------------
    getChildrenQuestion(state, getters) {
      return state.children[getters.getAnswerId].question;
    },
    getChildrenAnswerQuestion(_, getters) {
      if (getters.getActiveQuestion <= getters.getChildrenQuestion.length) {
        const id = getters.getActiveQuestion;
        return getters.getChildrenQuestion.find((quest) => quest.id === id).ask;
      } else {
        return null;
      }
    },
    getProverka(state, getters) {
      return state.children[getters.getAnswerId].proverka;
    },
    //DopQuestion ---------------------------------------------------
    getDopQuestion(state, getters) {
      return state.children[getters.getAnswerId].finishquestion;
    },
  },
  mutations: {
    changeProb(state, value) {
      const drobnoe = () => {
        return value - Math.fround(value);
      };
      let prob = state.probability;

      if (drobnoe() === 0) {
        prob += value;
        if (prob < 0) {
          state.probability = 0;
        } else {
          prob > 100 ? (state.probability = 100) : (state.probability = prob);
        }
      } else {
        prob *= value;
        prob > 100 ? (state.probability = 100) : (state.probability = prob);
      }
    },
    incremActiveQuestion(state, value) {
      state.activeQuestion += value;
    },
    setAnswerId(state, value) {
      state.mainquestion.answerId = value;
    },
    updateActiveQuestion(state, value) {
      state.activeQuestion = value;
    },
    updateCashQuestion(state, value) {
      state.cashactiveQuestion = value;
    },
    updateProb(state, value) {
      state.probability = value;
    },
  },
});
