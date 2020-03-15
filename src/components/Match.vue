<template>
  <div class="row">
    <div class="card-body">
      <div class="row">
        <div class="d-inline-flex">
          <div class="m-2">Rate</div>
          <input
            v-model="match.odd1"
            type="number"
            min="1"
            max="99"
            class="form-control m-2"
            id="exampleFormControlInput1"
            placeholder=""
          />
          <input
            v-model="match.odd2"
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
        <div class="d-inline-flex">
          <div class="m-2">Favourite</div>
          <div class="form-radio m-2">
            <label class="form-radio-label">
              <input type="radio" class="form-radio-input m-2" value="" />{{
                match.team1
              }}
            </label>
          </div>
          <div class="form-radio m-2">
            <label class="form-radio-label">
              <input type="radio" class="form-radio-input m-2" value="" />{{
                match.team2
              }}
            </label>
          </div>
          <div class="form-radio m-2">
            <label class="form-radio-label ">
              <input
                type="radio"
                class="form-radio-input m-2"
                value=""
                disabled
              />Dono/Both
            </label>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        @click="updateMatchDetails()"
      >
        Update
      </button>
      <div class="row">
        <div class="d-inline-flex">
          <div class="m-2">Winner</div>
          <button
            type="button"
            class="btn btn-primary btn-sm m-2"
            @click="declareWinner(match.team1)"
          >
            {{ match.team1 }}
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-sm m-2"
            @click="declareWinner(match.team2)"
          >
            {{ match.team2 }}
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm m-2"
            @click="declareWinner('DRAW')"
          >
            Draw
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match",
  props: {
    match: {
      Type: Object
    }
  },
  methods: {
    updateMatchDetails(match) {
      //current match
    },
    declareWinner(team) {
      //
    }
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
