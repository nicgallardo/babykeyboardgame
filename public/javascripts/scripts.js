$(document).ready(function(){
  var test = [];
$("#input").keypress(function(){

  var testing = "";
  test.push($("#input").val());
  $("#outputText").append(test);
  $("#input").append("");
});
$("#input").keypress(function(){
  $("#input").append("");
});




  // function zeroOut(string)
  // if(string.length === 2){
  //   test = "";
  // }
});
