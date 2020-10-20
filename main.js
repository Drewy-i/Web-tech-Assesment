const aForm=document.querySelector('#a-form')
const phoneInput = document.querySelector('#phone')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#pswd')
const msg = document.querySelector('.msg')

aForm.addEventListener('submit', onSubmit)
    function onSubmit(e) {
       e.preventDefault()

       if(emailInput.value === '' || phoneInput.value === '' ){
        msg.classList.add('error');
        msg.innerHTML ="Please fill up all the fields"
        setTimeout(() => msg.remove(), 5000);//  Set a timer for the message if the fields are not filled.
    }else {
        console.log('success')
 
    }
    
//Besides the event,added a function(arrow) which will run when the event happen.
//Chose to add an event listener on the button in order for it to be more dynamic in the UI,in real time. 

    }
    /*
    var myInput = document.getElementById("pswd")
    var letter = document.getElementById("letter")
    var capital = document.getElementById("capital")
    var number = document.getElementById("number")
    var length = document.getElementById("length")
    
 
				

var myInput = document.getElementById("pswd");
var capital = document.getElementById("capital");




myInput.onfocus = function() {
  document.getElementById("msg").style.display = "block";
}


myInput.onblur = function() {
  document.getElementById("msg").style.display = "none";
}


myInput.onkeyup = function() {
  
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

 */
