$(document).ready(function(){
  $("form#vacation-input").submit(function(event){
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();
    var q6 = $("input:radio[name=question6]:checked").val();

    var tulum = 0;
    var paris = 0;
    var serengeti = 0;
    var alaska = 0;
  });
});
