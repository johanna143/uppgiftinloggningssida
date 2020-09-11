//Om man redan är inloggag är localstorage true och då körs showWelcome
let keyName = "signedIn";
if (localStorage.getItem(keyName) == 'true'){
    showWelcome();
}
//Lyssnare som kollar om man klickat på loggat in. 
document.getElementById("submitForm").addEventListener("click", function(e) {
    e.preventDefault(); //avbryter eventet
    if (username.value == 'test' && password.value == 1234){
        showWelcome(); //funktionen showWelcome körs
        localStorage.setItem(keyName, 'true'); 
        //localStorage sätts till true om rätt användarnamn och lösen skickats, laddas sidan om är man fortfarande inloggad
    }
    else 
    {
        wrongLogin(); //om det inte är rätt inloggningsuppgigter körs funktionen wrongLogin
    }
});
//Lyssnare som kollar om man klickat på logga ut
document.getElementById("signOut").addEventListener("click", function(e) {
   e.preventDefault(); //avbryter eventet
    localStorage.setItem(keyName, 'false'); //Loggar man ut sätts localstoage till false
    defaultView(); //Funktionen defaultView körs
});
//Lyssnare som kollar om man klickat på Logga in igen
document.getElementById("wrongLogin").addEventListener("click", function(e) {
        e.preventDefault(); //avbryter eventet
    defaultView(); //Funktionen defaultView körs
});
//Funktion som gömmer och visar element
function showWelcome(){
    document.getElementById("felinlogg").style.display="none";
    document.getElementById("myform").style.display="none";
    document.getElementById("inloggad").style.display="block";
}
//Funktion som gömmer och visar element
function wrongLogin(){
    document.getElementById("felinlogg").style.display="block";
    document.getElementById("myform").style.display="none";
    document.getElementById("inloggad").style.display="none";
}
//Funktion som gömmer och visar element
function defaultView(){
    document.getElementById("felinlogg").style.display="none";
    document.getElementById("myform").style.display="block";
    document.getElementById("inloggad").style.display="none";
}




