<template>
  <div class="row">
    <div class="card-body">
      <div class="row">
        <div class="d-inline-flex">
          <div class="m-2">Rate</div>
          <input
            v-model="match.odds.odd1"
            type="number"
            min="1"
            max="99"
            class="form-control m-2"
            id="exampleFormControlInput1"
            placeholder=""
          />
          <input
            v-model="match.odds.odd2"
            type="number"
            min="1"
            max="99"
            class="form-control m-2"
            id="exampleFormControlInput1"
            placeholder=""
          />
        </div>
      </div>
      <div class="row">
        <div class="d-inline-flex p-2">
          <div class="m-2">Favourite</div>
          <div class="form-radio m-2 p-2">
            <label class="form-radio-label">
              <input type="radio" class="form-radio-input m-2" v-model="match.favouriteTeam" :checked="match.favouriteTeam == match.team1"  :value="match.team1" />{{
                transformTeamToCode(match.team1)
              }}
            </label>
          </div>
          <div class="form-radio m-2 p-2">
            <label class="form-radio-label">
              <input type="radio" class="form-radio-input m-2" v-model="match.favouriteTeam" :checked="match.favouriteTeam == match.team2"  :value="match.team2" />{{
               transformTeamToCode(match.team2)
              }}
            </label>
          </div>
          <div class="form-radio m-2 p-2">
            <label class="form-radio-label ">
              <input
                type="radio"
                v-model="match.favouriteTeam"
                class="form-radio-input m-2"
                :checked="match.favouriteTeam == -1"  :value="-1" 
              /> Dono/Both
            </label>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          @click="updateMatchDetails(match)"
        >
          Update
        </button>
      </div>
      <div class="row">
        <div class="d-inline-flex">
          <div class="m-2">Winner</div>
          <button
            type="button"
            class="btn btn-primary btn-sm m-2"
            @click="declareWinner(match.team1)"
          >
            {{ transformTeamToCode(match.team1) }}
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm m-2"
            @click="declareWinner(match.team2)"
          >
            {{ transformTeamToCode(match.team2) }}
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm m-2"
            @click="declareWinner(-1)"
          >
            Draw
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonJs from '../parser/common';
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
    transformTeamToCode(team){
        return CommonJs.transformTeamToCode(team);
    },
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
