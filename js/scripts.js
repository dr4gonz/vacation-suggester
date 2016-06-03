//Finds the index value for largest number in array
function indexOfMax(array) {
  if (array.length === 0) {
    return -1;
  }
  var max = array[0];
  var maxIndex = 0;
  for (i=1; i < array.length; i++) {
    if (array[i] > max) {
      maxIndex = i;
      max = array[i];
    }
  }
  return maxIndex;
}

$(document).ready(function(){
  $("form#vacation-input").submit(function(event){
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();
    var q6 = $("input:radio[name=question6]:checked").val();
    var q7 = $("input:radio[name=question7]:checked").val();
    var q8 = $("input:radio[name=question8]:checked").val();
    var answers = [q1,q2,q3,q4,q5,q6,q7,q8];
    var tulum = 0;
    var paris = 0;
    var serengeti = 0;
    var alaska = 0;
    //iterates of answers[] to tally answers
    for (i=0; i < answers.length-1; i++){
      if (answers[i] === "tulum-ans") {
        tulum++;
      } else if (answers[i] === "paris-ans") {
        paris++;
      } else if (answers[i] === "serengeti-ans") {
        serengeti++;
      } else if (answers[i] === "alaska-ans") {
        alaska++;
      }
    }
    var destination = [tulum, paris, serengeti, alaska];
    var destIndex = indexOfMax(destination);
    //Displays the page of whichever vacation was determined for the user.
    if (destIndex === 0) {
      $("#tulum-page").show();
    } else if (destIndex === 1) {
      $("#paris-page").show();
    } else if (destIndex === 2) {
      $("#serengeti-page").show();
    } else if (destIndex === 3) {
      $("#alaska-page").show();
    }
    $("#vacation-input").hide();
    event.preventDefault();
  });
});
