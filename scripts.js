function output(){
    var akanMale=["Kwasi","Kwadwo","Kwabena","Kwako","Yaw","Kofi","Kwame"];
    var akanFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
}
function calculate Akan Date(){
    //alert("I have clicked");

    var birthdate=document.getElementById("inputBirthDate").value;
    var gender=document.getElementById("selectGender").value;

    if(birthdate){
        alert("you've not entered any value for birtdate.");
        return("invalid");
    }
    /*
    *validate that the date entered is valid user enter 09/12/1973
    */

    var splitBirthDate = birthdate.split("/");

    var day = splitBirthDate[0];
    var month = parseInt(splitBirthDate[1] - 1);
    var year = splitBirthDate[2];

    if((day <=0) || (day >31)) {
        alert("The day is invalid.please enter a valid date!")
        return("invalid");
    }

    if((month <0) || (month >12)){
        alert("The month is invalid please enter a valid month!")
        return("invalid");
    }

    var birthDateObj = new Date (year,month,day);

    var dayOfWeek = birthDateObj.getDay();
    var dayOfWeekString = getDayOfWeek(dayOfWeek);

    alert("you were born on a" + dayOfWeekString +",and your gender is" + gender + ",so your Akan Name is" +getAkanName(gender,dayOfWeekString));
}
