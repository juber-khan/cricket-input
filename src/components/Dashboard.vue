<template>
  <div>
    <div class="row">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Cricket Input Tool</a>
      </nav>
    </div>
    <div class="row" style="margin-top: 100px">
      <div class="col-md-8 offset-md-2">
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li
                class="nav-item"
                v-for="(match, index) in matches"
                :key="index"
                @click.stop.prevent="setActive(match)"
              >
                <a class="nav-link active" href="#">{{ match.name }}</a>
              </li>
            </ul>
          </div>
         <Match :match="currentMatch"></Match>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Match from "./Match";
export default {
  components :{
    Match
  },
  name: "Matches",
  data() {
    return {
      currentMatch: {
      },
      matches: [
        {
          id: 1,
          name: "IND vs PAK",
          odd1: 21,
          odd2 : 23,
          team1: "Ind",
          team2: "PAK"
        },
        {
          id: 2,
          name: "Bang vs Raipur",
          odd1: 22,
          odd2 : 67,
          team1: "ss",
          team2: "ss"
        },
        {
          id: 3,
          name: "ABC vs POE",
          team1: "ABC",
          team2: "PE",
          odd1: 45,
          odd2 : 66,
        }
      ]
    };
  },
  created(){
    this.currentMatch = this.matches[0];
    //get businmess logic
  },
  methods: {
    updateMatchDetails(match) {
      //current match
    },
    setActive: function (tab) {
      
            var self = this;
            tab.isActive = true;
            this.activeTab = tab;
            this.currentMatch = {...tab};
            /*this.activeTab.isActive = true;
            console.log("activeTab name=" + this.activeTab.name);*/
            this.matches.forEach(function (tab) {
                console.log("TAB => " + tab);
                console.log("activeTab id => " + self.activeTab.id);
                console.log("tab id=" + tab.id);

                if (tab.id !== self.activeTab.id) { tab.isActive = false;}
            });
        },
  },
  ready: function() {
    this.setActive(this.tabs[0]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 20%;
  /* justify-self: center;
  align-self: center; */
}
</style>
