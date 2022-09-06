function scuberGreetingForFeet(fine) {
  // Write your code here!
  if (fine <= 400) {
    return "This one is on me!";
  } else if (fine > 2000 && fine <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
Console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city) {
  // Write your code here!
  if ((city === "NYC")) {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}
console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
