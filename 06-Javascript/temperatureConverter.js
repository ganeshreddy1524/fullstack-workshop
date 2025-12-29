alert("1.Celsius to Fahrenheit 2.Fahrenheit to Celsius")
let option=prompt('choose your option')
if(option==1){
    let celsius=prompt('enter celsius');
    let Fahrenheit=(celsius*9/5)+32
    alert(`celsius converted to Fahrenheit is ${Fahrenheit}`)
}else{
    let Fahrenheit=prompt('Enter Fahrenheit');
    let celsius=(Fahrenheit-32)*5/9;
    alert(`Fahrenheit converted to celsius is ${celsius}`)
}