document.addEventListener("DOMContentLoaded", function(){
    const myForm = document.getElementById("contactForm");
    myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    alert("Message sent successfully!\n\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

    //document.getElementById("name").value = document.getElementById("name").defaultValue;
    //document.getElementById("email").value = document.getElementById("email").defaultValue;
    //document.getElementById("message").value = document.getElementById("message").defaultValue;
    myForm.reset();

});
});