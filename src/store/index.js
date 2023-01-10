import { createStore } from "vuex";

export default createStore({
  state: {
    next: false,
    steps: ["type", "avatar", "role", "data", "print"],
    stepsActivated: ["type"],
  },
  getters: {},
  mutations: {
    setNext(state, payload) {
      state.next = payload;
    },
    setStep(state, payload) {
      state.stepsActivated.push(payload);
    },
    // resetParams(state) {
      
    // },
    resetSteps(state) {
      state.stepsActivated = ["type"];
    },
  },
  actions: {},
  modules: {},
});
