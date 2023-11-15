const message = "Merci de votre message, nous vous répondrons ASAP."
 
document.getElementById("contactForm").addEventListener("submit", function(event){
   event.preventDefault();
   alert(message);
});