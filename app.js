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
});

/* SubmissionListItem - Component *********************************************/

app.component("SubmissionListItem", {
  props: ["submission"],
  methods: {
    onVoting(index) {
      return this.submission.votes++;
    },
  },
  template: `<div class="d-flex">
    <div class="d-shrink-0">
      <img :src="submission.img" alt="foto" />
    </div>
    <div class="flex-grow-1 ms-3">
      <h5>
        {{submission.title}}
        <span
          class="float-end text-primary"
          style="cursor: pointer"
          @click="onVoting(index)"
        >
          <strong>{{submission.votes}}</strong> ❤️</span
        >
      </h5>
      <div>{{submission.desc}}</div>
      <small class="text-muted"
        >Eingereicht von: {{submission.author}}</small
      >
    </div>
  </div>`,
});

const vm = app.mount("#app");
