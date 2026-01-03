function response(){
    const name =  document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const queryType = document.getElementById("queryType").value;

    if(name == "" || email == "" || queryType == ""){
        alert("Please fill all the details");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email address");
        return;
    }

    alert("Thank you " + name + "! We will contact you soon regarding your interest in " + queryType + ".");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("queryType").value = "";
}