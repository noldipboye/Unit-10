function askname() {
  var name = prompt("What is your name?")
  return name 
}

function question(a) {
  var number = prompt(`What is the number you wish to convert, ${a}?`)
  return number
}

question(askname())

function mathC(b) {
  var C = ((b-32)*5/9);
  return C
}

function mathF(c) {
  var F = ((c*9)/5+32);
  return F
}

function unit(x, y) {
var that = prompt("Which unit of temperature do you wish to convert to(Press f for farenheit and c for celsius)?")
  if (that == "f"){
    alert(`The temperature is ${x} degrees celsius`)
  }
  else if (that == "c") {
    alert(`The temperature is ${y} degrees farenheit`)
  }
return that
}

unit(mathC(question()))



