let weight=prompt('Enter your weight');
let height=prompt('Enter your height');
let BMI=weight/height*height;
let catagory;
if(BMI<18.5){
    catagory='undreweight';
}
else if(BMI>=18.5 && BMI<25){
    catagory='normal';
}
else if(BMI>=25 && BMI<30){
    catagory='overweight';
}
else if(BMI>=30){
    catagory='obese'
}
alert(`your BMI is ${BMI} and your catagory is ${catagory}`)