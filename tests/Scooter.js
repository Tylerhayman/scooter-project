
// This is the class for the Scooter, this contains the essential properties of the scooter.
class Scooter{
  constructor(station,user,serial,charge,isBroken,rental,returned,hasBeenRented,repairneeded,newScooter,stationAmt) {
  ///////////////////////////
  this.charge = charge
  ///////////////////////////
  this.isBroken = isBroken
  ///////////////////////////
  this.serial = serial
  ///////////////////////////
  this.station = station
  ///////////////////////////
  this.user = user
  ///////////////////////////
  this.rental = rental
  ///////////////////////////
  this.returned = returned
  ///////////////////////////
  this.hasBeenRented = hasBeenRented
  ///////////////////////////
  this.repairneeded = repairneeded
  //////////////////////////
  this.newScooter = newScooter
  //////////////////////////
  this.stationAmt = stationAmt
  }


// This module helps to rent a scooter and fails if the charge is too low, or the scooter is broken.
  rent() {
    ////////////////////////////////////////////////////////////////////////
    if (Scooter.charge >= 75 && Scooter.isBroken == false) {
      rental = true
      docked = false
      HasBeenRented = true
      console.log("You have successfully rented this scooter.")
      /////////////////////////////////////////////////////////////////////
    } else if (Scooter.charge < 75 && Scooter.isBroken == false) {
      rental = false
      docked = true
      HasBeenRented = false
      console.log("This scooter needs to charge and is not available to rent.")
      /////////////////////////////////////////////////////////////////////
    } else if (Scooter.charge >= 75 && Scooter.isBroken == true) {
      rental = false
      docked = true
      HasBeenRented = false
      console.log("This scooter is currently unavailable as it is broken.")
      ////////////////////////////////////////////////////////////////////
    } else if (Scooter.charge < 75 && Scooter.isBroken == true) {
      rental = false
      docked = true
      HasBeenRented = false
      console.log("This scooter is currently unavailable as it is broken.")
      ///////////////////////////////////////////////////////////////////
    }
  }

// This is the async for charging, every 2 seconds the battery increases
  async charge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100
  
    console.log('Charge complete');   
  }


  async recharge() {
    if (charge < 100) {
      console.log("Beginning to recharge the battery")

      await new Promise(resolve => setTimeout(resolve, 2000))
      this.charge = 100

      console.log("The battery has been recharged!")
    }
  }

// This is the async for requesting a repair.
  async requestRepair() {
    if (Scooter.isBroken == true) {
      repairneeded = true
    }
  }

// This module helps to dock a scooter, changing from the scooter being rented out to being docked.
  dock() {
    /////////////////////////////////////////////////////////////////////
    if (Scooter.hasBeenRented == true) {
      docked = true
      hasBeenRented = false
      console.log("Thanks for returning your scooter!")
    }
   
  }
}

// If the scooter has been rented, you cannot rent the same scooter.
if (hasBeenRented = true) {
  console.log("Sorry you can't rent this scooter!")
}




// Everything to do with the station
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////



// If the scooter station is greater than or equal to 11, the station does not exist and cannot be docked.
if (station <= 11) {
  console.log("This station does not exist!")
}
// If the scooter station is greater than or equal to 11, the station does not exist and a scooter cannot be created.
if (stations >= 11) {
  console.log("A scooter cannot be created here, as the station does not exist!")
}


// This class generates a random serial number between 100 - 2000.
class nextSerial extends Scooter {
  i = 100;
  serial = i + getRandomInt(2000);
  
}

// Creating a new scooter

if (newScooter = true) {
  serial = nextSerial;
  charge = 100;
  isBroken = false;
  station = Math.getRandomInt(1,10);
}

module.exports = Scooter
