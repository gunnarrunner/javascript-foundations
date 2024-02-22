
class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hunger = 0;
    this.updateHungryStatus();
  }

  updateHungryStatus() {
    if (this.hunger > 2) {
      this.hungry = false;
    } else {
      this.hungry = true;
    }
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.hunger += 1;
    this.updateHungryStatus()
  }
}

module.exports = Dragon;