const app = Vue.createApp({
  data() {
    return {
      submissions: submissions, //aus seed.js
    };
  },
  methods: {
    onVoting() {
      return this.submissions[0].votes++;
    },
  },
}).mount("#app");
