"use strict";

const user = {
  firstName: "Umer",
  lastName: "Hameed",
};

// console.log(user.charAt(0));

/*
function checkUser(name) {
  if (["A", "G", "M", "S", "Y"].includes(name.charAt(0))) {
    console.log("#687399");
  } else if (["B", "H", "N", "T", "Z"].includes(name.charAt(0))) {
    console.log("#6DAEB0");
  } else if (["C", "O", "I", "U"].includes(name.charAt(0))) {
    console.log("#FFDCA8");
  } else if (["D", "P", "J", "V"].includes(name.charAt(0))) {
    console.log("#FAA578");
  } else if (["E", "K", "Q", "W"].includes(name.charAt(0))) {
    console.log("#C46693");
  } else if (["F", "L", "R", "X"].includes(name.charAt(0))) {
    console.log("#78518A");
  }
}
checkUser(user);*/


function avatarColor(name) {
  switch (true) {
    case ["A", "G", "M", "S", "Y"].includes(name):
      console.log("#687399");
      break;
    case ["B", "H", "N", "T", "Z"].includes(name):
      console.log("#6DAEB0");
      break;
    case ["C", "O", "I", "U"].includes(name):
      console.log("#FFDCA8");
      break;
    case ["D", "P", "J", "V"].includes(name):
      console.log("#FAA578");
      break;
    case ["E", "K", "Q", "W"].includes(name):

      console.log("#C46693");
      break;
    case ["F", "L", "R", "X"].includes(name):
      console.log("#78518A");
    default:
      console.log("not valid");
  }
}

avatarColor(user.firstName.charAt(0));
