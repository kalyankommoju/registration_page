function valiadateForm(){
    const usernameRegex=/^[a-zA-Z0-9._]{2,}$/;
    const numberRegex=/^\d{10}$/;
    const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const username=document.getElementById("username").value;
    const number=document.getElementById("number").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("pwd").value;
    const confirmPassword=document.getElementById("confirmpwd").value;

    resetErrorMessages()
    if(!usernameRegex.test(username)){
        document.getElementById("usernameError").innerText="Username Already Taken";
        return;
    }
    if(!numberRegex.test(number)){
        document.getElementById("numberError").innerText="Enter Ten Digit Number";
        return;
    }
    if(!emailRegex.test(email)){
        document.getElementById("emailError").innerText="Enter Correct Email";
        return;
    }
    if(!passwordRegex.test(password)){
        document.getElementById("passwordError").innerText="Password Too Short";
        return;
    }
    if(password !== confirmPassword){
        document.getElementById("password").innerText="Password Not Match";
        return;
    }
alert("Your porsche application successfully registered");
console.log("username",username);
console.log("phone",number);
console.log("email",email);
console.log("password",password);
}
function resetform(){
    document.getElementById("main").reset();
    resetErrorMessages();
}
function resetErrorMessages(){
    const errorMessages=document.querySelectorAll(".error-message");
    errorMessages.forEach(message=>message.innerText="");
}