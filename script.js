//On récupère les différents éléments du formulaire:
 const email = document.querySelector('#email');
 const password = document.querySelector("#password");
 const submit = document.getElementById('validate');

 //on souhaite écouter les saisies de l'utilisateur. Pour se faire, on utilise un gestionnaire d'évenement:
// addEventListener avec l'event 'input'

//EMAIL 
email.addEventListener('input', function() {
    const emailValue = email.value.trim();
    console.log(emailValue);
    const regex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    const emailError = document.querySelector('#email-error');
    
   /* if (emailValue == '') {
        emailError.classList.add("show-error")
    } else {
        emailError.classList.remove("show-error")
    }*/

    console.log(regex.test(emailValue))
    if (!regex.test(emailValue) && emailValue.length > 0){
        emailError.textContent="Veuillez renseigner un email valide !!!";
        emailError.style.display = "block";
        emailError.style.color= "red";
    } else{
        emailError.style.display = "none";
    }

});
// MDP 
password.addEventListener('input', function(){
    const passVerif = document.getElementById('passwordVerif')
    const passValue = password.value.trim()
    const passMinLength = document.getElementById('min-length');
    const passMaxLength = document.getElementById('max-length');
    const passUppercase = document.getElementById('uppercase');
    const passDigit = document.getElementById('digit');
    const passSpecial = document.getElementById('special');

    if (passValue.length < 9 && passValue.length > 24){
        passMinLength.style.display ="block";
        passMinLengthstyle.color= "red";
    }else {
        passMinLength.style.display = "none";
    }

    if (passValue.length > 24){
        passMaxLength.style.display ="block";
        passMaxLengthstyle.color= "blue";
    }else {
        passMaxLength.style.display = "none";
    }

    const hasUppercase = /[A-Z]/.test(passValue);
    hasUppercase ? passUppercase.style.color = "green" : passUppercase.style.color = "red";
    //version compresser mais possible avec if{}, else{} comme précédement
    const hasNumber = /[0-9]/.test(passValue);
    hasNumber ? passDigit.style.color = "green" : passDigit.style.color = "red";
    const Special = /[\W]/.test(passValue);
    Special ? passSpecial.style.color = " green" : passSpecial.style.color = "red";


    // const repetPass = passVerif.match(passValue);
    // repetPass ? passVerif.style.color ="green" : passVerif.style.color = "red";
});
