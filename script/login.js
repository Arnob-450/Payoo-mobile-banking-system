console.log("Login page is working");

document.getElementById("login-btn")
.addEventListener("click", function() {
    // console.log("Login button is working");
    // 1. get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log("Contact Number:", contactNumber);

    // 2. get the pin input
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log("PIN:", pin);
    // 3. match the mobile number and pin with the stored data
    if(contactNumber === "01787776216" && pin ==="1234"){
         // 4. true:::>> alert> homepage
        alert("login Success");
        window.location.assign("./home.html");
    }    
    // 5. false:::>> alert> invalid credentials
    else{
        alert("Invalid credentials");
        return;
    }

})