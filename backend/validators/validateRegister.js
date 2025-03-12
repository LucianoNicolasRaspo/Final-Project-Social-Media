const validate = (e)=>{
    let user_name = document.getElementById("user_name").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    if(user_name === "" || password === "" || age === "" || email === "") {
      alert("Please ensure all the required values are entered.");
      return false;
    }
    return true;
  }