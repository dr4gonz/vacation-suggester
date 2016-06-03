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
    var q9 = $("input:radio[name=question9]:checked").val();
    var q10 = $("input:radio[name=question10]:checked").val();

    var answers = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

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

    console.log(tulum);
    console.log(paris);
    console.log(serengeti);
    console.log(alaska);

    event.preventDefault();
  });
});
