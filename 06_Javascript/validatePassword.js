function validateFunction(password){
   
    let hasUpperCase=false;
    let hasLowerCase=false;
    let hasSpecialCharacter=false;
    let hasNumber=false;
    let object={
        isvalid:true,error:[]
    }
    if(password.length<8){
        object.isvalid=false;
        object.error='Too short'
        return object
    }
    else{
        for (const element of password) {
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
        object.isvalid=false;
        object.error.push('Missing uppercase')
    }
    if(!hasLowerCase){
        object.isvalid=false;
        object.error.push('Missing lowercase')
    }
    if(!hasNumber){
        object.isvalid=false;
        object.error.push('Missing number');
    }
    if(!hasSpecialCharacter){
        object.isvalid=false;
        object.error.push('Missing special characters')
    }
    return object
}
console.log(validateFunction('Gani@123'));
