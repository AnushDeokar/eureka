var password = document.getElementById('password');
var confirm = document.getElementById("confirm_password");
function check_pass() {
    console.log("hello");
  if (document.getElementById('password').value ==
          document.getElementById('confirm_password').value) {
      document.getElementById('submit').disabled = false;
  } else {
      document.getElementById('submit').disabled = true;
      confirm.setCustomValidity('Passwords do not match');
  }
}
