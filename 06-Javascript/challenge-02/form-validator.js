const userName=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmPassword=document.getElementById("confirmpassword")
const submitButton=document.querySelector("button")

const fields=[userName,email,password,confirmPassword];

userName.addEventListener("blur",validateUsername)
email.addEventListener("blur",validateEmail)
password.addEventListener("blur",validatePassword)
confirmPassword.addEventListener("blur",validateConfirmPassword)

function setError(input,message){
   input.classList.remove("is-valid")
   input.classList.add("is-invalid")
    const errorMsg=input.parentElement.querySelector(".error");
    errorMsg.innerText=message
    
}
function setSuccess(input){
    input.classList.remove("is-invalid")
    input.classList.add("is-valid")
    const errorMsg=input.parentElement.querySelector(".error");
    errorMsg.innerText="";
}
function validateUsername(){
    const input=userName.value.trim()
    if(input ===""){
        clearError(userName,"username is required")
        return false
    }
    if(input.length<3 || input.length>15){
        message="invalid length"
        setError(userName,message)
        return false
    }
    
            if(!/^[a-zA-Z0-9]+$/.test(input)){
                message="only alphanumeric is allowed"
                setError(userName,message)
                return false
            }
            setSuccess(userName)
            return true
        
    
}
function validateEmail(){
    const input=email.value.trim()
    for (const element of input) {
        if(!input.endsWith("@gmail.com")  ){
            message="must end with @gmail.com"
            setError(email,message)
            return false
        }
        else{
            setSuccess(email)
            return true;
        }
    }
}

function validatePassword(){
    const input=password.value.trim()
    let hasUpperCase=false;
    let hasLowerCase=false;
    let hasSpecialCharacter=false;
    let hasNumber=false;
     if(input.length<8){
        message="length invalid"
        setError(password,message)
        return false
    }
    else{
        for (const element of input) {
        if(element>='A' && element<='Z'){
            hasUpperCase=true;
            
        }
        else if(element>='a' && element<='z'){
            hasLowerCase=true;
            
        }
        else if(element>='0' && element<='9'){
            hasNumber=true;
            
        }
        else{
            hasSpecialCharacter=true;
            
        }
    }
    }
    if(!hasUpperCase){
        message="missing uppercase"
        setError(password,message)
        return false
    }
    if(!hasLowerCase){
        message='Missing lowercase'
        setError(password,message)
        return false
    }
    if(!hasNumber){
        message='Missing number';
        setError(password,message)
        return false
    }
    if(!hasSpecialCharacter){
        message='Missing special characters';
        setError(password,message)
        return false
    }
    if(hasNumber&&hasLowerCase&&hasSpecialCharacter&&hasUpperCase){
        setSuccess(password)
        return true;
    }
}
function validateConfirmPassword(){
    const input=confirmPassword.value.trim()
    if(confirmPassword.value!=password.value){
        message="passwords not match"
        setError(confirmPassword,message)
        return false
    }
    else{
        setSuccess(confirmPassword)
        return true
    }
}
if(validateUsername()&&validateEmail()&&validatePassword()&&validateConfirmPassword()){
    submitButton.disabled=false
}
else{
    submitButton.disabled=true
}

function checkFormValidity(){
    submitButton.disabled=!(validateUsername()&&
    validateEmail()&&
    validatePassword()&&
    validateConfirmPassword())
}
fields.forEach(field=>field.addEventListener(input,checkFormValidity))