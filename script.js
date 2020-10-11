//Contact us responsiveness
function validateTheForm() {
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    if (Name == "") {
      alert("please fill in your Name");
      return false;
    } else if (Email == "") {
      alert("Please fill in your name and Email");
      return false;
    } else {
      alert(
        Name +
          ", we have received your message. Thank you for reaching out to us."
      );
    }
    event.preventDefault();
  }


  


//portfolio-responsivesness  
    $("#work1").hover(
      function() {
        $("#txt1").show("");
      },
      function() {
        $("#txt1").hide("");
      }
    );
    $("#work2").hover(
      function() {
        $("#txt2").show("");
      },
      function() {
        $("#txt2").hide("");
      }
    );
    $("#work3").hover(
      function() {
        $("#txt3").show("");
      },
      function() {
        $("#txt3").hide("");
      }
    );
    $("#work4").hover(
      function() {
        $("#txt4").show("");
      },
      function() {
        $("#txt4").hide("");
      }
    );
    $("#work5").hover(
      function() {
        $("#txt5").show("");
      },
      function() {
        $("#txt5").hide("");
      }
    );
    $("#work6").hover(
      function() {
        $("#txt6").show("");
      },
      function() {
        $("#txt6").hide("");
      }
    );
    $("#work7").hover(
      function() {
        $("#txt7").show("");
      },
      function() {
        $("#txt7").hide("");
      }
    );
    $("#work8").hover(
      function() {
        $("#txt8").show("");
      },
      function() {
        $("#txt8").hide("");
      }
    );
  });