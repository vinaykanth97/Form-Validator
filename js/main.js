"use strict;"
var dynField = document.querySelectorAll('.dyn-field'),
    context = document.getElementById('context')
Fname = document.getElementById('firstname')
Lname = document.getElementById('lastname')
jobRole = document.getElementById('job-role')
radioBtns = document.querySelectorAll('.radio-btns')
company = document.getElementById('company')
busArena = document.getElementById('bus-arena')
exp = document.getElementById('exp')
street = document.getElementById('street')
addInfo = document.getElementById('add-info')
zipCode = document.getElementById('zipcode')
state = document.getElementById('state')
country = document.getElementById('country')
code = document.getElementById('code')
phnNumber = document.getElementById('phone-number')
email = document.getElementById('email')
gender = document.querySelectorAll('.gender')
var agree = document.getElementById('agree')
// Regular Expression Pattern
var EmailPattern = /[a-zA-Z0-9_.+-]+@+[a-z]+\.\w+$/,
    NamePattern = /^[A-Z]/

var CheckedGender;
// Alert When Invalid
function Invalid(selector, message) {
    document.querySelector(selector).classList.add('error-border')
    document.querySelector(selector).nextElementSibling.classList.add('show')
    document.querySelector(selector).nextElementSibling.children[1].innerText = message
}
// Remove the alert when Valid
function RemoveInvalid(selector, message) {
    document.querySelector(selector).classList.remove('error-border')
    document.querySelector(selector).nextElementSibling.classList.remove('show')
    document.querySelector(selector).nextElementSibling.children[1].innerText = message
}
// Process When Submitting
function HandleSubmit(e) {
    e.preventDefault()
    var errorFname = false
    var errorLname = false
    var errorGender = false
    var companyError = false
    var busArenaError = false
    var streetError = false
    var zipError = false
    var codeError = false
    var numberError = false
    var emailError = false
    var agreeError = false
    if ((!Fname.value.match(NamePattern))) {
        Invalid('#firstname', "Your first name must start with capital")
        errorFname = true
    } else {
        RemoveInvalid('#firstname', "")
    } if ((!Lname.value.match(NamePattern))) {
        Invalid('#lastname', "Your Last name must start with capital")
        errorLname = true

    } else {
        RemoveInvalid('#lastname', "")
    }
    if (gender[0].checked == true || gender[1].checked == true) {
        CheckedGender = document.querySelector('.gender:checked').value
        gender[0].classList.remove("error")
        gender[1].classList.remove("error")
    } else {
        gender[0].classList.add("error")
        gender[1].classList.add("error")
        errorGender = true
    }
    if (company.value.length > 3) {
        RemoveInvalid('#company', "")
    } else {
        Invalid('#company', "Please fill your company name")
        companyError = true
    }
    if (busArena.value != "" && busArena.value.length > 4) {
        RemoveInvalid('#bus-arena', "")
    } else {
        Invalid('#bus-arena', "Please fill your Business Area")
        busArenaError = true
    } if (street.value != "" && street.value.length > 4) {
        RemoveInvalid('#street', "")
    } else {
        Invalid('#street', "Please fill your Address")
        streetError = true
    } if (zipcode.value != "" && zipcode.value.length >= 6) {
        RemoveInvalid('#zipcode', "")
    } else {
        Invalid('#zipcode', "Your zipcode must have 6 numbers")
        zipError = true
    } if (code.value != "" && code.value.length >= 3) {
        RemoveInvalid('#code', "")
    } else {
        Invalid('#code', "Your code must be below 3 numbers")
        codeError = true
    } if (phnNumber.value.length == 8 || phnNumber.value.length == 10) {
        RemoveInvalid('#phone-number', "")
    } else {
        Invalid('#phone-number', "Your Phone number must have 10 numbers")
        numberError = true
    } if (email.value.match(EmailPattern)) {
        RemoveInvalid('#email', "")
    } else {
        Invalid('#email', "Your email must be in *****@*****.*** pattern")
        emailError = true
    } if (agree.checked == true) {
        agreeError = false
    } else {
        agreeError = true
    }
    // If everything Satisfied
    if (errorFname == false && errorLname == false && errorGender == false && companyError == false && busArenaError == false && streetError == false && zipError == false && numberError == false && emailError == false && agreeError == false) {
        alert("All Good Thanks for your patience")
    }
}

document.querySelector('.general-form').addEventListener('submit', HandleSubmit)

