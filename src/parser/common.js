 import s_config from "../config/staticConfig";
 
 const transformTeamToCode = function (teamId) {
    let result ='';
    if((teamId == 0) || (teamId == undefined) || (!s_config.teams[teamId]))  return '';
    let words = [];
    if(s_config.teams[teamId].code){
       return s_config.teams[teamId].code;
    }
    if(s_config.teams[teamId].name){
      words = s_config.teams[teamId].name.split(' ');
    }
    if(words.length == 1){
      result = words[0].substring(0, 3);
    }
    else{
      result = words.map((word) => word[0]).join('');
    }
    return result.toUpperCase();
  };

export default {
    transformTeamToCode
}