const Test = require("./models/test");
var faker = require('faker');
require("./database");

module.exports = async () => {
  

  // Guardo el inicio
  console.time("startTiming");

  //peticiones
  for (let i = 0; i < 1000; i++) {
    
    let test = new Test();
    
    test.name = faker.name.findName();
    test.lastName = faker.name.lastName();
    test.email = faker.internet.email();
    test.isValidEmail = true;
    test.password = faker.internet.password();
    test.phone = faker.phone.phoneNumber();
    test.ip = faker.internet.ip();
    console.log("\033[2J");
    console.log("Let's go papurri gogogogogogo");
    console.log(i+":"+test);

    await test.save();
  }
  // Guardo el final
  console.timeEnd("startTiming");

  return "listo pa'";
};

/* 
//peticiones numericas
  for (let i = 0; i < 1000; i++) {
    const lasted = await Test.find().sort({ $natural: -1 }).limit(1);
    let cant = lasted[0].cant;
    cant = cant + cant + 1;
    const test = new Test();
    test.cant = cant;
    await test.save();
    console.log(i + ":" + cant);
  }
*/