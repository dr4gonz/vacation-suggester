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

    if (q1 === "tulum-ans") {
      tulum++;
    } else if (q1 === "paris-ans") {
      paris++;
    } else if (q1 === "serengeti-ans") {
      serengeti++;
    } else if (q1 === "alaska-ans") {
      alaska++;
    }

    if (q2 === "tulum-ans") {
      tulum++;
    } else if (q2 === "paris-ans") {
      paris++;
    } else if (q2 === "serengeti-ans") {
      serengeti++;
    } else if (q2 === "alaska-ans") {
      alaska++;
    }

    if (q3 === "tulum-ans") {
      tulum++;
    } else if (q3 === "paris-ans") {
      paris++;
    } else if (q3 === "serengeti-ans") {
      serengeti++;
    } else if (q3 === "alaska-ans") {
      alaska++;
    }

    if (q4 === "tulum-ans") {
      tulum++;
    } else if (q4 === "paris-ans") {
      paris++;
    } else if (q4 === "serengeti-ans") {
      serengeti++;
    } else if (q4 === "alaska-ans") {
      alaska++;
    }

    if (q5 === "tulum-ans") {
      tulum++;
    } else if (q5 === "paris-ans") {
      paris++;
    } else if (q5 === "serengeti-ans") {
      serengeti++;
    } else if (q5 === "alaska-ans") {
      alaska++;
    }

    if (q6 === "tulum-ans") {
      tulum++;
    } else if (q6 === "paris-ans") {
      paris++;
    } else if (q6 === "serengeti-ans") {
      serengeti++;
    } else if (q6 === "alaska-ans") {
      alaska++;
    }

    console.log(tulum);
    console.log(paris);
    console.log(serengeti);
    console.log(alaska);

    event.preventDefault();
  });
});
