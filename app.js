function askname() {
  var name = prompt("What is your name?")
  return name 
}

function question(a) {
  var number = prompt(`What is the number you wish to convert, ${a}?`)
  return number
}

function mathC(b) { // f to c
  var C = ((b-32)*5/9);
  return C
}

function mathF(c) { // c to f
  var F = ((c*9)/5+32);
  return F
}

function choose() {
  var that = prompt("Which unit of temperature do you wish to convert to(Press f for farenheit and c for celsius)?")
  return that
}

function unit() {
  var t = choose()
  if (t == "f") {
    alert(mathC(question(askname())))
  } else if (t== "c") {
    alert(mathF(question(askname())))
  } else {
    alert("Exit")
  }
}


unit()



