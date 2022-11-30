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
    bgHeaderColor() {
      return {
        //Objekt-Schreibweise
        "bg-primary": this.addVotes >= 70,
        "text-white": this.addVotes >= 70,
        //alternativ: "bg-primary text-white": this.addVotes >=70
      };
      /* array-Schreibweise: 
      if(this.addVotes >= 70){
        return ["bg-primary", "text-white"];*/
    },
    votesFontSize() {
      return { fontSize: this.addVotes * 0.3 + "px" };
    },
  },
  methods: {
    onVoting(index) {
      return this.submissions[index].votes++;
    },
  },
}).mount("#app");
