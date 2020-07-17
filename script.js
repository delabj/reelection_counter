// date of the election
var election_date = new Date("2022-11-08");

// Today's date
var today = new Date();

//calcuate days
var dayTillElection = Math. ceil((election_date - today)/(1000*60*60*24));


var nickname_list = [
  "Kim Reynolds", 
  "Kim Reynolds", 
  "Kim Reynolds", 
  "Kim Reynolds", 
  "Kim Reynolds", 
  "Kim Reynolds", 
  "Kim Reynolds", 
  "COVID Kim",
  "Kim, 'Open the Schools' Reynolds",
  "Iowa Govenor Kim Reynolds", 
  "Kim, the COVID Kid"
];

// calculate number of days
function get_days(days=dayTillElection) { 
  
  var text = days+" Days";
  document.getElementById("daysLeft").innerHTML = text;
}


// There's probably a simpler way to do this. 
function nickname(){
  
  var length = nickname_list.length;
  var rand_num = Math.ceil(Math.random()*length-1);
  var name_val = nickname_list[rand_num];
  document.getElementById("name").innerHTML = name_val;

}





get_days();
nickname();