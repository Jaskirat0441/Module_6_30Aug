const validate_reg_form = () =>{
let first_name= document.getElementById('first_name').value;
let last_name = document.getElementById('last_name').value;
let reg_email = document.getElementById('reg_email').value;
let phone_number= document.getElementById('reg_phone').value;
let batch_number= document.getElementById('batch_number').value;
let module_number = document.getElementById('module_number').value;
let tnC = document.getElementById('tnC').checked
;
// console.log(first_name,last_name,reg_email,phone_number,batch_number,module_number,tnC);
 let valid= true;


//  first name validation
 if(first_name.trim().length>=3){
    document.getElementById("valid-firstname").style.display="block";
    document.getElementById("invalid-firstname").style.display="none";
    document.getElementById('first_name').value=first_name.trim();
}else{
    document.getElementById("valid-firstname").style.display="none";
    document.getElementById("invalid-firstname").style.display="block";
    valid= false;
}

// last name validation
if(last_name.trim().length>=3){
    document.getElementById("valid-lastname").style.display="block";
    document.getElementById("invalid-lastname").style.display="none";
    document.getElementById('last_name').value=last_name.trim();
}else{
    document.getElementById("valid-lastname").style.display="none";
    document.getElementById("invalid-lastname").style.display="block";
    valid= false;
}

// email validation

if(reg_email.includes('@') && reg_email.includes('.') &&  reg_email.lastIndexOf(".") +4 == reg_email.length &&  reg_email.indexOf('@') !== 0 ){
    document.getElementById("valid-reg_email").style.display="block";
    document.getElementById("invalid-reg_email").style.display="none";
    document.getElementById("reg_email").value= reg_email.trim();
}else{
    document.getElementById("invalid-reg_email").style.display="block";
    document.getElementById("valid-reg_email").style.display="none";
    valid=false

}

// phone number

if(phone_number.length == 10 && parseInt(phone_number)){
    document.getElementById("valid-reg_phone").style.display="block";
    document.getElementById("invalid-reg_phone").style.display="none";
}else{
    document.getElementById("valid-reg_phone").style.display="none";
    document.getElementById("invalid-reg_phone").style.display="block";
    valid=false

}

// batch number 

if(batch_number != "None"){
    document.getElementById('valid-batch').style.display="block";
    document.getElementById('invalid-batch').style.display="none";
}else{
    document.getElementById('valid-batch').style.display="none";
    document.getElementById('invalid-batch').style.display="block";
    valid= false
}

// module number
if(module_number != "None"){
    document.getElementById('valid-module').style.display="block";
    document.getElementById('invalid-module').style.display="none";
}else{
    document.getElementById('valid-module').style.display="none";
    document.getElementById('invalid-module').style.display="block";
    valid= false;
}

if(tnC) {
    document.getElementById("tnc_success").style.color = "green";
    document.getElementById("tnC-invalid").style.display = "none";
    
} else {
    document.getElementById("tnC-invalid").style.display = "block";
    document.getElementById("tnc_success").style.color = "#212529";

    valid= false
    // document.getElementById("invalid-tnC").style.display = "block";
    // document.getElementById("tnc_success").style.color = "#dc3545";
}

if(valid){

    setTimeout(() => {
        alert("Your details have been saved successfully!")
        resetInputsValues();
        let invalid_inputs = document.getElementsByClassName("valid-feedback");
        for(let i=0;i<invalid_inputs.length;i++){
        invalid_inputs[i].style.display="none"
        }
        document.getElementById("tnc_success").style.color = "#212529";
    }, 500);
}

console.log(valid)
}
const resetInputsValues =()=>{
    document.getElementById('first_name').value="";
    document.getElementById('last_name').value="";
    document.getElementById('reg_email').value="";
    document.getElementById('reg_phone').value="";
    document.getElementById('batch_number').value="None";
    document.getElementById('module_number').value="None";
    document.getElementById('tnC').checked=false;
    let invalid_inputs = document.getElementsByClassName("valid-feedback");
}
