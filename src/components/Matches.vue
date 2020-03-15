<template>
  <div class="hello row">
    <div class="col-md-8 offset-md-2">
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="d-inline-flex">
              <div class="m-2">Rate</div>
              <input
                type="number"
                min="1"
                max="99"
                class="form-control m-2"
                id="exampleFormControlInput1"
                placeholder=""
              />
              <input
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
                  <input
                    type="radio"
                    class="form-radio-input m-2"
                    value=""
                  />India
                </label>
              </div>
              <div class="form-radio m-2">
                <label class="form-radio-label">
                  <input
                    type="radio"
                    class="form-radio-input m-2"
                    value=""
                  />Pakistan
                </label>
              </div>
              <div class="form-radio m-2">
                <label class="form-radio-label ">
                  <input
                    type="radio"
                    class="form-radio-input m-2"
                    value=""
                    disabled
                  />Both
                </label>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary btn-sm">Update</button>
          <div class="row">
            <div class="d-inline-flex">
              <div class="m-2">Winner</div>
              <button type="button" class="btn btn-primary btn-sm m-2">
                Team1
              </button>
              <button type="button" class="btn btn-secondary btn-sm m-2">
                Team2
              </button>
              <button type="button" class="btn btn-primary btn-sm m-2">
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
export default {
  name: "Matches",
  data() {
    return {
      matches: [
        {
          id: 1,
          name: "IND vs PAK",
          team1: "Ind",
          team2: "PAK"
        },
        {
          id: 1,
          name: "IND vs PAK",
          team1: "Ind",
          team2: "PAK"
        },
        {
          id: 1,
          name: "IND vs PAK",
          team1: "Ind",
          team2: "PAK"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 10%;
  justify-self: center;
  align-self: center;
}
</style>
