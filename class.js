
// A simple class constructor
// constructor function is called automatically when the object is initialized.

class Bike {
    constructor(name) {
      this.brand = name;
    }
  }
  
const myBike = new Bike("Apache 160-4V");

// We can also create our own mwthods
class MyBike {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I runned more than 10000KM ' + this.brand;
    }
  }
  
  const bike = new Car("Apache 160-4V");
  bike.present();
  


    