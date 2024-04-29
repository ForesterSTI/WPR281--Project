const countries = ["South Africa", "Japan", "India"];
let statesSA = ["Gauteng","Kwa-Zulu Natal", "Western Cape"]; let statesFrance = ["Hokkaido","Gunma","Fukushima"]; 
let statesIndia = ["Andhra Pradesh","Gujarat","Kerala"];

let citySA1=["Pretoria","Johannesburg","Soweto"]; let citySA2=["Durban","Pietermaritzburg","KwaDukuza"]; 
let citySA3=["Cape Town","Paarl","Stellenbosch"]; 

let cityJapan1=["Sapporo","Otaru","Wakkanai"]; let cityJapan2=["Ota","Maebashi","Annaka"]; 
let cityJapan3=["Fukuoka","Kitakyushu","Kurume"]; 

let cityIndia1=["Vizag","Vijayawada","Tirupati"]; let cityIndia2=["Ahmedabad","Rajkot","Surat"]; 
let cityIndia3=["Kochi","Kollam","Thiruvananthapuram"]; 

let country = document.getElementById('country');
let state = document.getElementById('state');
let city = document.getElementById('city');
let form = document.getElementById('form');

countries.forEach(function (item) {
    let option = document.createElement('option');
    option.text = item;
    option.value = item;
    country.appendChild(option);
});

function checkName(){
    let fname = document.getElementById("first-name");
    if (fname.value == "" || fname.value == null) {
        alert("hi");
    }
}


//email validation
const email = document.getElementById("email");
form.addEventListener("Continue",(e) => {
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //validate all inputs

    const emailinput = email.value.trim();// this prevents users from from adding unnecessary extra space

    // email condition so user must not leave entry blank/empty
    if(emailinput===" " || emailinput== null){
        //error space
        setErrorFor(email, "Please fill in this field");
    }
    else{
        //success space
    }
}

function setErrorFor(input,message) {
    const FormControl = input.split.parentElement;
    const small = formControl.querySelector('small'); //refence to small tag where error text will disply

    small.innerText = message;//adds the text to error message 

    formControl.className = "column error" 
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "column success"
}

