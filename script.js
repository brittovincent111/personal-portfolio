var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var mobileError = document.getElementById('mobile-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('btnError')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length <= 3){
        nameError.innerHTML = 'Name required';
        return false;
    }
    if(!name.match(/^[a-zA-Z ]+$/)){
        nameError.innerHTML = 'Name cannot contain numbers';
        return false;
    }
    
    nameError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}
function validateMobile(){
    var mobile = document.getElementById('contact-mobile').value;
    if(mobile.length==0){
        mobileError.innerHTML = 'Mobile no required'
        return false;
    }
    if(mobile.length !==10){
        mobileError.innerHTML = 'Mobile no should be 10 digits'
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        mobileError.innerHTML = 'Mobile no required'
        return false;
    }
   
    mobileError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>'
    return true;
}
function validateEmail(){
    var email =  document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML = 'Email required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required -message.length;
    if(left > 0){
        messageError.innerHTML =left + 'more character required'
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}

function validateForm(){
    if(!validateName() ||!validateMobile() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}