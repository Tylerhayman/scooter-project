const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(station,registeredUsers) {
    this.station = station;
    this.registeredUsers = registeredUsers;
  }

  registerUser() {
    registeredUsers = false;
    if (username == username && password == password) {
      console.log("Your account has been created successfully!")
      registeredUsers = true;
    }
  }

  loginUser() {
    if (username == username && password == password && registeredUsers == true) {
      console.log("You have been logged in.")
    } else {
      console.log("You haven't been logged in, please try again.")
    }

  }

  logoutUser() {
    if (username == username && password == password && registeredUsers == true && loggedIn == true) {
      console.log("You have successfully logged out of your account.")
  } else {
    console.log("You haven't been able to log out at this time, are you sure you have an account and that you are logged in?")
  }
  }


  // Creates a scooter when the scooter amount at a station is 0, then uses logic within scooter class to create one.
createScooter() {
  if (Scooter.stationAmt == 0) {
    newScooter = true
  }
    
  }
// Uses the scooter dock logic from within the scooter class.
dockScooter() {
  {Scooter.dock()} 
  }
// Uses the scooter rent logic from within the scooter class.
rentScooter() {
  {Scooter.rent()}  
  }
}

module.exports = ScooterApp
