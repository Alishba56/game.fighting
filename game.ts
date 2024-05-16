#! /usr/bin/env node
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease()  {
    let fuel = this.fuel - 25
    this.fuel = fuel
  }
  fuelIncrease() {
    this.fuel = 100
  }
}

class Opponent {
  name: string;
  fuel: number = 100
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel -25
    this.fuel = fuel
  }
}

let player1 = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "please is your name?",
  },
]);

let opponent1 = await inquirer.prompt([
  {
    type: "list",
    name: "select",
    message: "select your opponent ?",
    choices: ["Enddy", "sara", "carlo"],
  },
]);

let p1 = new Player(player1.name);
let o1 = new Opponent(opponent1.select);

do {
  //Enddy
  if (opponent1.select == "Enddy") {
    let ask = await inquirer.prompt([
      {
        type: "list",
        name: "opt",
        message: "What Would you like to do ?",
        choices: ["fire", "medikit", "save your life"],
      },
    ]);
    if (ask.opt == "fire") {
      let num = Math.floor(Math.random() * 2)
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} is fuel: ${p1.fuel}`);
        console.log(`${o1.name} is fuel: ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("you lost!");
          process.exit();
        }
      }
      
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} is fuel: ${p1.fuel}`);
        console.log(`${o1.name} is fuel: ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log("you Win!");
          process.exit();
        }
      }
    }
    if (ask.opt == "medikit") {
      p1.fuelIncrease()
      console.log(`you drink a health portion your fuel is ${p1.fuel}`);
    }
    if (ask.opt == "save your life") {
      console.log("you save your life better luck nexk time!" );
      process.exit();
    }
  }
  //sara

  if (opponent1.select == "sara") {
    let ask = await inquirer.prompt([
      {
        type: "list",
        name: "opt",
        message: "What Would you like to do ?",
        choices: ["fire", "medikit", "save your life"],
      },
    ]);
    if (ask.opt == "fire") {
      let num = Math.floor(Math.random() * 2)
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} is fuel: ${p1.fuel}`);
        console.log(`${o1.name} is fuel: ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("you lost!");
          process.exit();
        }
      }
      
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} is fuel: ${p1.fuel}`);
        console.log(`${o1.name} is fuel: ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log("you Win!");
          process.exit();
        }
      }
    }
    if (ask.opt == "medikit") {
      p1.fuelIncrease()
      console.log(`you drink a health portion your fuel is ${p1.fuel}`);
    }
    if (ask.opt == "save your life") {
      console.log("you save your life better luck nexk time!");
      process.exit();
    }
  }



//carlo
  if (opponent1.select == "carlo") {
    let ask = await inquirer.prompt([
      {
        type: "list",
        name: "opt",
        message: "What Would you like to do ?",
        choices: ["fire", "medikit", "save your life"],
      },
    ]);
    if (ask.opt == "fire") {
      let num = Math.floor(Math.random() * 2)
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} is fuel: ${p1.fuel}`);
        console.log(`${o1.name} is fuel: ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("you lost!");
          process.exit();
        }
      }
      
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} is fuel: ${p1.fuel}`);
        console.log(`${o1.name} is fuel: ${o1.fuel}`);
        if (o1.fuel <= 0) {
          console.log("you Win!");
          process.exit();
        }
      }
    }
    if (ask.opt == "medikit") {
      p1.fuelIncrease()
      console.log(`you drink a health portion your fuel is ${p1.fuel}`);
    }
    if (ask.opt == "save your life") {
      console.log("you save your life better luck nexk time!");
      process.exit();
    }
  }


} while (true)
