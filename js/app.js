const people = [{ name: "Bradd Pitt", Birthday: new Date(63, 11, 18) },
{ name: "Chris Hemsworth", Birthday: new Date(83, 7, 11) },
{ name: "Xavier \"Chabelo\" López Rodriguez", Birthday: new Date(35, 1, 17) },
{ name: "Jack Black", Birthday: new Date(69, 7, 28) },
{ name: "Katty Perry", Birthday: new Date(84, 9, 25) }];

people.forEach((item) => {
  let day = item.Birthday.getDate();
  let person = item.name;
  let currentSign;
  switch (item.Birthday.getMonth()) {
    case 0:
      if (day < 20) { currentSign = "Capricornio"; } else { currentSign = "Acuario"; }
      break;
    case 1:
      if (day < 19) { currentSign = "Acuario"; } else { currentSign = "Piscis"; }
      break;
    case 2:
      if (day < 21) { currentSign = "Piscis"; } else { currentSign = "Aries"; }
      break;
    case 3:
      if (day < 20) { currentSign = "Aries"; } else { currentSign = "Tauro"; }
      break;
    case 4:
      if (day < 21) { currentSign = "Tauro"; } else { currentSign = "Géminis"; }
      break;
    case 5:
      if (day < 21) { currentSign = "Géminis"; } else { currentSign = "Cáncer"; }
      break;
    case 6:
      if (day < 23) { currentSign = "Cáncer"; } else { currentSign = "Leo"; }
      break;
    case 7:
      if (day < 23) { currentSign = "Leo"; } else { currentSign = "Virgo"; }
      break;
    case 8:
      if (day < 23) { currentSign = "Virgo"; } else { currentSign = "Libra"; }
      break;
    case 9:
      if (day < 23) { currentSign = "Libra"; } else { currentSign = "Escorpio"; }
      break;
    case 10:
      if (day < 22) { currentSign = "Escorpio"; } else { currentSign = "Sagitario"; }
      break;
    case 11:
      if (day < 22) { currentSign = "Sagitario"; } else { currentSign = "Capricornio"; }
      break;
  }
  console.log(`${person} es ${currentSign}`);
});