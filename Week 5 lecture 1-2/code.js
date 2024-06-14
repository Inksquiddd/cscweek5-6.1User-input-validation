function playCraps(){
    //this is a one line comment 
    /* function to play craps in game.html
    Rules for craps 
    Role 2 Die
    add up to 7 or 11 you lose!
    If they are doubles and event, you win!
    Everything else is a push! (keep playing)

    Diego Garcia 20may2024
    */
   console.log("playCraps() started");
    //roll dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die 1 result" + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die 2 result" + die2;

    var sum= die1 +die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "die 1 result" + sum;
   
    //look for a loss
    if(sum == 7 || sum == 11){
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "The Knights know your location! (you lose)" + sum;
    } else if (die1 == die2 && die1 % 2 ==0 ){//look for a win 
        console.log("win");
        document.getElementById("gameRes").innerHTML = "Welcome to Cyberia please come again! (you win)" + sum;
    }else {//look for a push
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "Fix your navi (try again)" + sum
    }

    //adding check creds for strings.html input validation//
    
    

}

function checkCreds() {

    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "status of login";
    //make requird veriiable//
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //extract required variables//
    firstName = document.getElementById("fName").value; 
    console.log("the first name was entered as:" + firstName);
    
    lastName = document.getElementById("lName").value; 
    console.log("the last name was entered as:" + lastName);
   
    zipCode = document.getElementById("zipCode").value; 
    console.log("the zipCode was entered as:" + zipCode);

    fullName = firstName + " " + lastName; 
    console.log("the Fullname name was entered as:" + fullName);

    fullNameLength = fullName.length - 1; 
    console.log("the variable fullName has " + fullNameLength + " characters")

    zipCodeNumb= parseInt(zipCode);
    console.log("The actual zip code number is: " + zipCodeNumb);



    //testing 2 full name and zip code//
  
    if(fullNameLength > 20 || fullNameLength < 2){
        console.log("Invalid Full name");
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if(zipCode.length != 5){
        console.log("Invalid zip code");
        document.getElementById("loginStatus").innerHTML = "invalid zipcode";

    } else {
        alert("user credentials passed, welcome to the site, " + fullName);
        document.getElementById("loginStatus").innerHTML = " credentials passed";

    }
}