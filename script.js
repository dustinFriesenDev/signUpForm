//add a ease in using javascript
signUp(); //first call to ready the buttons so the buttons don't take two clicks. 
function signUp() { // show the form and hide the sign up button.
  var x = document.getElementById("signUp");
  var y = document.getElementById("btnStart");
  var blur = document.getElementById("blur");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    blur.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

funForm(); //first call to ready the buttons so the buttons don't take two clicks.
function funForm() { //hide the form and show the results.
  var x = document.getElementById("results");
  var y = document.getElementById("signUp");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

  function userAnswers() {
    //Name
    var uName = document.getElementById("name").value;
    var responseName = document.getElementById("resultsName");
    if (uName == "") {
      responseName.innerHTML = "You got to put something in."
    } else {
      responseName.innerHTML = `${uName}` + ": Really? I wouldn't have guessed, " + `${uName}` + " That's...cool.";
    } 
  // Contact
    var contactCheck = document.getElementsByName("contact")
    var responseContact = document.getElementById("resultsContact");
    for (var i = 0, length = contactCheck.length; i < length; i++) {
      if (contactCheck[i].checked) {
        if (contactCheck[i].id == "scream" || contactCheck[i].id == "yodel" || contactCheck[i].id == "sayName") {
          responseContact.innerHTML = `${contactCheck[i].value}` + ": We'll then look up that the moon and whisper your name in hopes you're looking back thinking of us, too.";    
        } else if (contactCheck[i].id = "noInput" ) {
          responseContact.innerHTML = "How else will I know how to get a hold of you?";
        }
      }
    }
  //Phone
    var uPhone = document.getElementById("phone");
    var selectedPhone = uPhone.options[uPhone.selectedIndex].innerHTML;
    var selectedValue = uPhone.value;
    var response = document.getElementById("resultsPhone");
    if (selectedValue == "") {
      response.innerHTML = "I've been trying to call you. You won the lottery!"
    } else {
      response.innerHTML = `${selectedPhone}` + ": I knew that was your number! Why didn't you pick up when I called you last week??";
    }
  //Animal
    var uAnimal = document.getElementById("animal").value;
    var response = document.getElementById("resultsAnimal");
    if (uAnimal == "") {
      response.innerHTML = "My favorite animal is a monkey."
    } else {
      response.innerHTML = `${uAnimal}` + ": It's okay to like imaginary creatures. More power to you!";
    }
  //Birthday
    var birthCheck = document.getElementsByName("birth")
    var responseBirth = document.getElementById("resultsBirth");

    for (var i = 0, length = birthCheck.length; i < length; i++) {
      if (birthCheck[i].checked) {
        if (birthCheck[i].id == "past" || birthCheck[i].id == "present" || birthCheck[i].id == "future") {
          responseBirth.innerHTML = `${birthCheck[i].value}` + ": (sigh) Me too.";    
        } else if (birthCheck[i].id = "noInput" ) {
          responseBirth.innerHTML = "How will I know when to send you a gift?"
        }
      }
    }
  }
backForm(); //first call to ready the buttons so the buttons don't take two clicks.
function backForm() { //show the form and hide the results.
  var x = document.getElementById("signUp");
  var y = document.getElementById("results");
  var z = document.getElementById("btnStart");
  if (x.style.display === "none" && z.style.display === "none" ) {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

//Results page:
//grabbing answers from inputs, adding them togethers, and output them to results 
var uName = document.getElementById("name");
var userInput = uName.value;
var response = document.getElementById("resultsName");
response.innerHTML = `${userInput}` + ": That's a funny made up name! lol"; 

