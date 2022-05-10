const Fullname=document.getElementById("fullname").value;
let Fathername=document.getElementById("fathername").value;
let Mothername=document.getElementById("mothername").value;;
let Dob=document.getElementById("dob").value;
let Gender=document.getElementById("gender").value;
let Degree=document.getElementById("degree").value;
let College=document.getElementById("college").value;
let Email=document.getElementById("email").value;
let Mobile=document.getElementById("mobile").value;
let Street=document.getElementById("street").value;
let City=document.getElementById("city").value;
let District=document.getElementById("district").value;
let Zipcode=document.getElementById("zipcode").value;
let State=document.getElementById("state").value;
let Country=document.getElementById("city").value;
let Btn=document.getElementById("btn");
if(Fullname.length <=0){
    alert("Full name is requrd..");
  
   
};
if(Fathername.length <=0){
    alert("Father name is requrd..");
   
};
if(Mothername.length <=0){
    alert("Mother name is requrd..");
   
};
if(Dob.length <=0){
    alert("Date of Birth is requrd..");
   
};
if(Degree.length <=0){
    alert("Degree is requrd..");
   
};
if(College.length <=0){
    alert("College name is requrd..");
   
};
if(Email.length <=0){
    alert("Email is requrd..");
   
};
if(Mobile.length <=0){
    alert("Mobile Number is requrd..");
   
};
if(Street.length <=0){
    alert("Street name is requrd..");
   
};
if(City.length <=0){
    alert("City is requrd..");
   
};
if(District.length <=0){
    alert("District name is requrd..");
   
};
if(State.length <=0){
    alert("State name is requrd..");
   
};
if(Country.length <=0){
    alert("Country name is requrd..");
   
};
if(Zipcode.length <=0){
    alert("Zip Code is requrd..");
   
};
function validateNumber(id){
    const element=document.getElementById(id);
    const re=/^[0-9]{10}$/;
    if(!re.test(element.value)){
        alert("Enter 10 digit mobile no. ")
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function validateEmail(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if(!re.test(element.value)){
        alert("Enter vaild email..")
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function validateFullName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        alert("Text must be string only..")
        element.style.border="2px solid #ff0012";
        return false;
    };
    element.style.border="2px solid #5dfbdf";
};
function Details(){
console.log("Fullname ="+Fullname)
console.log("FatherName ="+Fathername)
console.log("Mother Name ="+Mothername)
console.log("Date of Birth ="+Dob)
console.log("Gender ="+Gender)
console.log("Degree ="+Degree)
console.log("College ="+College)
console.log("Email ="+Email)
console.log("Mobile ="+Mobile)
console.log("Street ="+Street)
console.log("City ="+City)
console.log("District ="+District)
console.log("Zipcode ="+Zipcode)
console.log("State ="+State)
console.log("Country ="+Country)


}