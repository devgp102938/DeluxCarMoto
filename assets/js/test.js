function handlesubmit(event)
{
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const model = document.getElementById("carModel").value;
    const date = document.getElementById("date").value;

    if(name == "" || email == "" || phone == "" || model == "" || date == "")
    {
        alert("Please fill out all fields before submitting.");
        return false;
    }

    if(!email.includes('@') || !email.includes('.'))
    {
        alert("Please Enter valid email adress!");
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) 
    {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    const today = new Date();
    const selectedDate = new Date(date);
    if(selectedDate < today)
    {
        alert("Please select a valid future date for your test drive.");
        return false;
    }


    alert("Thank you " + name + "!\n\nYour test drive for " + model + " has been requested successfully.\nWe will contact you at " + email + "." + "\nSee you soon \nthank you!");
    document.getElementById("testDriveForm").reset();
    return false;
}