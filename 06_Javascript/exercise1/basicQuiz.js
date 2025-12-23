alert('What is 5 + 3?')
let ans1=Number(prompt('enter your answer'));
alert('What is the capital of Telangana?')
let ans2=prompt('enter your answer');
alert('What color is the sky?');
let ans3=prompt('entre your answer');
let score=0;
if(ans1==8){
    score++;
}
if(ans2=='hyderabad'){
    score++;
}
if(ans3=='blue'){
    score++
}
alert(`your score is ${score}`);