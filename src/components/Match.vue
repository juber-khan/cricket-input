<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-2 col-md-2">
            Rate
          </div>
          <div class="col-sm-5 col-md-2">
            <input
              v-model="match.odds.odd1"
              type="number"
              min="1"
              max="99"
              class="form-control"
            />
          </div>
          <div class="col-sm-5 col-md-2">
            <input
              v-model="match.odds.odd2"
              type="number"
              min="1"
              max="99"
              class="form-control"
            />
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-sm-3 col-md-2">Favourite</div>
          <div class="col-sm-3 col-md-2">
            <div class="form-radio">
              <label class="form-radio-label">
                <input
                  type="radio"
                  class="form-radio-input m-2"
                  v-model="match.favouriteTeam"
                  :checked="match.favouriteTeam == match.team1"
                  :value="match.team1"
                />{{ transformTeamToCode(match.team1) }}
              </label>
            </div>
            </div>
            <div class="col-sm-3 col-md-2">
            <div class="form-radio">
              <label class="form-radio-label">
                <input
                  type="radio"
                  class="form-radio-input m-2"
                  v-model="match.favouriteTeam"
                  :checked="match.favouriteTeam == match.team2"
                  :value="match.team2"
                />{{ transformTeamToCode(match.team2) }}
              </label>
            </div>
            </div>
            <div class="col-sm-3 col-md-3">
              <div class="form-radio">
              <label class="form-radio-label ">
                <input
                  type="radio"
                  v-model="match.favouriteTeam"
                  class="form-radio-input m-2"
                  :checked="match.favouriteTeam == -1"
                  :value="-1"
                />
                Dono
              </label>
            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="updateMatchDetails(match)"
          >
            Update
          </button>
          </div>
        </div>
    
        <hr />
        <br>
        <div class="row">
            <div class="col-sm-2 col-md-2">
            Winner
            </div>
            <div class="col-sm-2 col-md-2">
               <button
              type="button"
              class="btn btn-success btn-sm w-100 p-1"
              @click="declareWinner(match.team1)"
            >
              {{ transformTeamToCode(match.team1) }}
            </button>
            </div>
            <div class="col-sm-2 col-md-2">
               <button
              type="button"
              class="btn btn-primary btn-sm  w-100 p-1"
              @click="declareWinner(match.team2)"
            >
              {{ transformTeamToCode(match.team2) }}
            </button>
            </div>
           <div class="col-sm-2 col-md-2">
            <button
              type="button"
              class="btn btn-danger btn-sm  w-100 p-1"
              @click="declareWinner(-1)"
            >
              Draw
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonJs from "../parser/common";
export default {
  name: "Match",
  props: {
    match: {
      Type: Object
    }
  },
  methods: {
    updateMatchDetails(match) {
      // do update
    },
    declareWinner(match) {
      // do update
    },
    transformTeamToCode(team) {
      return CommonJs.transformTeamToCode(team);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 20%;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
