// contact us section
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
        Name + ", we have received your message. Thank you for reaching out to us."
      );
    }
    event.preventDefault();
  }


  