class User {
  constructor(username,password,age,loggedIn,) {
    ///////////////////////////
    this.username = username;
    ///////////////////////////
    this.password = password;
    ///////////////////////////
    this.age = age;
    ///////////////////////////
    this.loggedIn = loggedIn;
    ///////////////////////////
  }




// This method lets the user log in and sets loggedIn to true, if username and password are correct.
  login() {
    if (username = username && password == password) {
      loggedIn = true
      console.log("You have successfully logged in.")
      ///////////////////////////////////////////////
    } else if (username =! username && password != password) {
      console.log("You don't have an account with us, please create one.")
      ///////////////////////////////////////////////
    } else if (age <= 12) {
      console.log("Sorry you are too young to access this service!")
      ///////////////////////////////////////////////
    } else {
      loggedIn = false
      console.log("Your username or password is incorrect.")
      ///////////////////////////////////////////////
    } 

    
  }



// This method lets the user logout.
 logout() {
  ///////////////////////////////////////
  if (loggedIn = true) {
    loggedIn = false
    console.log("You have successfully logged out of your account!")
    ////////////////////////////////////
  } else {
    console.log("You cannot logout as you have not logged in!")
    ///////////////////////////////////
  }
 }

 
}

module.exports = User
