function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate_and_alert()
{
  var email = document.getElementById('email').value;
  if(validateEmail(email))
  {
    document.getElementById("success").style.display = "block";
    document.getElementById("failure").style.display = "none";
  }
  else
  {
    document.getElementById("success").style.display = "none";
    document.getElementById("failure").style.display = "block";
  }
}
