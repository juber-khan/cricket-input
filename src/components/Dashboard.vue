<template>
  <div>
    <div class="row" style="margin-bottom:10%">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Cricket Input Tool</a>
      </nav>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-8 offset-md-2">
        <div class="card" v-if="!loggedIn">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li
                class="nav-item" 
                v-for="(match, index) in matches"
                :key="index"
                @click.stop.prevent="setActive(match)"
              >
                <a class="nav-link" v-bind:class="{'active': currentMatch.id == match.id }" href="#">{{ getMatchName(match) }}</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <Match :match="currentMatch"></Match>
          </div>
        </div>
        <div class="card" v-else>
          <input id="host" placeholder="Enter host here" v-model="host" />
          <input id="port" placeholder="Enter port here" v-model="port" />
          <input
            id="username"
            placeholder="Enter username here"
            v-model="username"
          />
          <input
            id="username"
            placeholder="Enter password here"
            v-model="password"
          />
          <button type="submit" @click="login()">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import paho from "paho-mqtt";
let loggedIn = false;
let host = "cric-dev-01.tp.teenpattigold.com";
let port = "8084";
let username = "anon";
let password = "anon";
let matches = [];

Array.prototype.removeIf = function(callback) {
  var i = 0;
  while (i < this.length) {
    if (callback(this[i], i)) {
      this.splice(i, 1);
    } else {
      ++i;
    }
  }
};

import CommonJs from "../parser/common";
import Match from "./Match";
export default {
  components: {
    Match
  },
  name: "Matches",
  data() {
    return {
      loggedIn,
      host,
      port,
      username,
      password,
      matches,
      currentMatch: {},
      matches: [
        {
          id: 123456,
          favouriteTeam: 402833,
          odds: {
            odd1: 45,
            odd2: 60
          },
          team1: 402833,
          winner: 0,
          team2: 280779
        },
        {
          id: 123457,
          favouriteTeam: 297232,
          winner: 0,
          odds: {
            odd1: 23,
            odd2: 25
          },
          team1: 152330,
          team2: 297232
        }
      ]
    };
  },
  created() {
    this.currentMatch = this.matches.length > 0 && this.matches[0];
    //get businmess logic
  },
  methods: {
    transformTeamToCode(team) {
      return CommonJs.transformTeamToCode(team);
    },
    isNotEmptyObject(obj) {
      return Object.keys(obj).length;
    },
    getMatchName(match) {
      if (match.id) {
        return (
          this.transformTeamToCode(match.team1) +
          " vs " +
          this.transformTeamToCode(match.team2)
        );
      } else {
        return "No Name";
      }
    },
    login() {
      let vm = this;
      var client = new paho.Client(this.host, Number(this.port), "");
      vm.client = client;

      // set callback handlers
      client.onConnectionLost = onConnectionLost;
      client.onMessageArrived = onMessageArrived;

      // connect the client
      client.connect({
        onSuccess: onConnect,
        userName: this.username,
        password: this.password,
        useSSL: true
      });

      // called when the client connects
      function onConnect() {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        client.subscribe("matches/#");
        vm.loggedIn = true;
      }

      // called when the client loses its connection
      function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
          console.log("onConnectionLost:" + responseObject.errorMessage);
        }
      }

      // called when a message arrives
      function onMessageArrived(message) {
        console.log("onMessageArrived:" + message.payloadString);
        if (!message.payloadString || message.payloadString == "null") return;
        let match = JSON.parse(message.payloadString);
        vm.matches.removeIf(e => {
          return e.id == match.id;
        });
        vm.matches.push(match);
      }
    },
    setActive: function(tab) {
      var self = this;
      tab.isActive = true;
      this.activeTab = tab;
      this.currentMatch = { ...tab };
      this.matches.forEach(function(tab) {
        if (tab.id !== self.activeTab.id) {
          tab.isActive = false;
        }
      });
    }
  },
  ready: function() {
    this.setActive(this.tabs[0]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active { 
  color:green !important;
  outline :0 !important;
  background-color: white !important;
  border: 1px 1px 0px 1px !important;
  border-color:rgba(0,0,0,.125) !important;
  border-top-left-radius: .25rem !important;
  border-top-right-radius: .25rem !important;
} 
.nav-tabs .nav-link {
   border: 1px 1px 0px 1px !important;
   border-color: transparent;
}
.hello {
  margin-top: 20%;
  /* justify-self: center;
  align-self: center; */
}
</style>
