function validateInputs(){
let Fullname=document.getElementById("fullname");
let Fathername=document.getElementById("fathername");
let Mothername=document.getElementById("mothername");
let Dob=document.getElementById("dob");
let Gender=document.getElementById("gender");
let Degree=document.getElementById("degree");
let College=document.getElementById("college");
let Email=document.getElementById("email");
let Mobile=document.getElementById("mobile");
let Street=document.getElementById("street");
let City=document.getElementById("city");
let District=document.getElementById("district");
let Zipcode=document.getElementById("zipcode");
let State=document.getElementById("state");
let Country=document.getElementById("city");

console.log("Fullname ="+Fullname.value)
console.log("FatherName ="+Fathername.value)
console.log("Mother Name ="+Mothername.value)
console.log("Date of Birth ="+Dob.value)
console.log("Gender ="+Gender.value)
console.log("Degree ="+Degree.value)
console.log("College ="+College.value)
console.log("Email ="+Email.value)
console.log("Mobile ="+Mobile.value)
console.log("Street ="+Street.value)
console.log("City ="+City.value)
console.log("District ="+District.value)
console.log("Zipcode ="+Zipcode.value)
console.log("State ="+State.value)
console.log("Country ="+Country.value)
let Btn=document.getElementById("btn");
if(Fullname.value.length <=0){
    alert(" Full name is required..");
    Fullname.focus();
    return false;

   
}
if(Fathername.value.length <=0){
    alert("Father name is requrd..");
    Fathername.focus();
    return false;


   
}
if(Mothername.value.length <=0){
    alert("Mother name is requrd..");
    Mothername.focus();
    return false;

   
}
if(Dob.value.length <=0){
    alert("Date of Birth is requrd..");
    Dob.focus();
    return false;

}
if(Degree.value.length <=0){
    alert("Degree is requrd..");
    Degree.focus();
    return false;

   
}
if(College.value.length <=0){
    alert("College name is requrd..");
    College.focus();
    return false;

   
}
if(Email.value.length <=0){
    alert("Email is requrd..");
    Email.focus();
    return false;

   
}
if(Mobile.value.length <=0){
    alert("Mobile Number is requrd..");
    Mobile.focus();
    return false;

}
if(Street.value.length <=0){
    alert("Street name is requrd..");
    Street.focus();
    return false;

   
}
if(City.value.length <=0){
    alert("City is requrd..");
    City.focus();
    return false;

   
}
if(District.value.length <=0){
    alert("District name is requrd..");
    District.focus();
    return false;

   
}
if(State.value.length <=0){
    alert("State name is requrd..");
    State.focus();
    return false;

}
if(Country.value.length <=0){
    alert("Country name is requrd..");
    Country.focus();
    return false;

   
}
if(Zipcode.value.length <=0){
    alert("Zip Code is requrd..");
    Zipcode.focus();
    return false;

}return false;
}
function validateNumber(id){
    const element=document.getElementById(id);
    const re=/^[0-9]{10}$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Number should be a number:..");},4000);
        
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function validateEmail(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Enter Valid Email..");},4000);
     
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function validateFullName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("FullName must be a String..");},4000);
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function validateFatherName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Father name must be string only..");},4000);
        
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function validateMotherName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Mother name must be string only..");},4000);
        
        
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function validateCollegeName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("college_name must be string only..");},4000);
        return false;
    };
};
function validateDegree(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Enter valid degree..");},4000);
      
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};

function validateAdress(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Adress must be string only..");},4000);
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};

