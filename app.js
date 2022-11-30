const app = Vue.createApp({
  data() {
    return {
      submissions: submissions, //aus seed.js
    };
  },
  computed: {
    addVotes() {
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
    sortedSubmissions() {
      return this.submissions.sort((subA, subB) => {
        return subB.votes - subA.votes;
      });
    },
    
  methods: {
    onVoting(index) {
      return this.submissions[index].votes++;
    },
  },
}).mount("#app");
